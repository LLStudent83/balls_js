import { Ball } from "./src/Ball.js";
import { Balls } from "./src/Balls.js";
import { EvilCircle } from "./src/EvilCircle.js";

const balls = new Balls(Ball, 25, EvilCircle);
balls.loop();
