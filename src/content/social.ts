export const social = [
  { url: "mailto:info@jorgerodriguez.es", name: "mail" },
  { url: "https://linkedin.com/in/angular-frontend/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
