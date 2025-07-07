import { Ball } from "./Ball";
import { Balls } from "./Balls";
import { EvilCircle } from "./EvilCircle";
import { Scoreboard } from "./Scoreboard";

import "./styles.css";

new Balls(Ball, EvilCircle, Scoreboard, 25);

if (module.hot) {
  module.hot.accept();
}
