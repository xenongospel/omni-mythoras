import "./style.css";
import * as scene from "./scene";
import { setupUi } from "./ui";

const canvas = document.createElement("canvas");
canvas.id = "app";

const battle = scene.mount(canvas);
setupUi(canvas, battle);
