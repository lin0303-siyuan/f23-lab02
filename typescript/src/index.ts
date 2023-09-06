import { newRenderer } from "./renderer.js"
import { Rectangle, newRectangle } from "./shapes/rectangle.js";

const rectangle: Shape = new Rectangle(2, 3)
const renderer = newRenderer(rectangle)
renderer.draw();