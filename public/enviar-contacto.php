<?php
$allowed_origins = [
    'https://jorgerodriguez.es',
    'https://www.jorgerodriguez.es',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
];
$recipient_email = 'info@jorgerodriguez.es';

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('X-Frame-Options: DENY');

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

if ($origin !== '') {
    if (!in_array($origin, $allowed_origins, true)) {
        http_response_code(403);
        echo json_encode(['success' => false, 'message' => 'Origen no autorizado']);
        exit();
    }

    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Metodo no permitido']);
    exit();
}

$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rate_limit_file = sys_get_temp_dir() . '/contact_form_' . md5($ip) . '.json';
$current_time = time();

if (file_exists($rate_limit_file)) {
    $data = json_decode((string) file_get_contents($rate_limit_file), true);
    if (!is_array($data) || !isset($data['count'], $data['first_request'])) {
        $data = ['count' => 0, 'first_request' => $current_time];
    }

    if ($current_time - (int) $data['first_request'] > 3600) {
        $data = ['count' => 1, 'first_request' => $current_time];
    } else {
        $data['count'] = (int) $data['count'] + 1;
        if ($data['count'] > 10) {
            http_response_code(429);
            echo json_encode(['success' => false, 'message' => 'Demasiadas solicitudes. Intenta mas tarde.']);
            exit();
        }
    }
} else {
    $data = ['count' => 1, 'first_request' => $current_time];
}

file_put_contents($rate_limit_file, json_encode($data), LOCK_EX);

$name = isset($_POST['name']) ? trim((string) $_POST['name']) : '';
$email = isset($_POST['email']) ? trim((string) $_POST['email']) : '';
$message = isset($_POST['message']) ? trim((string) $_POST['message']) : '';
$company = isset($_POST['company']) ? trim((string) $_POST['company']) : '';

if ($company !== '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Solicitud no valida']);
    exit();
}

$errors = [];

if ($name === '' || strlen($name) < 2 || strlen($name) > 100) {
    $errors[] = 'El nombre debe tener entre 2 y 100 caracteres';
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 255) {
    $errors[] = 'El correo electronico es invalido';
}

if ($message === '' || strlen($message) < 10 || strlen($message) > 5000) {
    $errors[] = 'El mensaje debe tener entre 10 y 5000 caracteres';
}

$spam_keywords = ['viagra', 'casino', 'poker', 'lottery', 'bitcoin', 'click here', 'buy now'];
$message_lower = strtolower($message);

foreach ($spam_keywords as $keyword) {
    if (strpos($message_lower, $keyword) !== false) {
        $errors[] = 'El mensaje contiene contenido no permitido';
        break;
    }
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit();
}

$safe_name = htmlspecialchars(str_replace(["\n", "\r"], '', $name), ENT_QUOTES, 'UTF-8');
$safe_email = htmlspecialchars(str_replace(["\n", "\r"], '', $email), ENT_QUOTES, 'UTF-8');
$safe_message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

$subject = 'Nueva solicitud de contacto - Portfolio';
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: Jorge Rodriguez <noreply@jorgerodriguez.es>\r\n";
$headers .= "Reply-To: " . $safe_email . "\r\n";
$headers .= "X-Mailer: ContactForm\r\n";

$body = "<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #1f1d19; }
    .container { background-color: #f5efe6; padding: 24px; }
    .email-content { background-color: #ffffff; padding: 30px; border-radius: 12px; }
    .header { border-bottom: 3px solid #ff8400; padding-bottom: 18px; margin-bottom: 24px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #1f1d19; }
    .value { margin-top: 5px; }
    .footer { margin-top: 28px; padding-top: 18px; border-top: 1px solid #e5dccd; font-size: 12px; color: #6d6254; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='email-content'>
      <div class='header'>
        <h2>Formulario web de Jorge Rodriguez</h2>
      </div>
      <div class='field'>
        <div class='label'>Nombre:</div>
        <div class='value'>" . $safe_name . "</div>
      </div>
      <div class='field'>
        <div class='label'>Correo electronico:</div>
        <div class='value'><a href='mailto:" . $safe_email . "'>" . $safe_email . "</a></div>
      </div>
      <div class='field'>
        <div class='label'>Mensaje:</div>
        <div class='value'>" . nl2br($safe_message) . "</div>
      </div>
      <div class='footer'>
        <p>Este mensaje fue enviado desde el formulario de contacto del portfolio.</p>
        <p>IP del remitente: " . htmlspecialchars($ip, ENT_QUOTES, 'UTF-8') . "</p>
      </div>
    </div>
  </div>
</body>
</html>";

$mail_sent = mail($recipient_email, $subject, $body, $headers);

if ($mail_sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Mensaje enviado correctamente. Te contactare pronto.',
        'timestamp' => date('Y-m-d H:i:s'),
    ]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Error al enviar el correo. Intenta de nuevo mas tarde.']);
}
?>
