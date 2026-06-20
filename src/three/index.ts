import { camera } from "./core/camera";
import { renderer } from "./core/renderer";
import { objects } from "./objects";
import { renderTarget } from "./core/renderTarget";
import { threeSizes } from "./utils/sizes";
import { resources } from "../utils/resources";
import { raycast } from "./utils/raycast";

let canvas: HTMLCanvasElement | null = null;
let initialized = false;

const canUseWebGL = () => {
  try {
    const testCanvas = document.createElement("canvas");
    const context = testCanvas.getContext("webgl2") || testCanvas.getContext("webgl");
    return !!context;
  } catch {
    return false;
  }
};

const init = (_canvas: HTMLCanvasElement): boolean => {
  if (!canUseWebGL()) {
    console.warn("WebGL is not available. The portfolio will run without the 3D scene.");
    return false;
  }

  canvas = _canvas;

  resources.once("ready", () => {
    if (!canvas) return;

    threeSizes.init(_canvas);
    camera.init();
    renderTarget.init();

    const rendererInitialized = renderer.init(canvas);
    if (!rendererInitialized) {
      renderTarget.destroy();
      camera.destroy();
      threeSizes.destroy();
      canvas = null;
      return;
    }

    objects.init();
    raycast.init();
    initialized = true;
  });

  return true;
};

const destroy = () => {
  if (!canvas && !initialized) return;
  threeSizes.destroy();
  renderTarget.destroy();
  renderer.destroy();
  objects.destroy();
  camera.destroy();
  canvas = null;
  initialized = false;
};

export const three = { init, destroy };
