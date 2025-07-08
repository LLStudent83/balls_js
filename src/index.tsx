import { createRoot } from "react-dom/client";
import { Ball } from "./Ball";
import { Balls } from "./Balls";
import { EvilCircle } from "./EvilCircle";
import { Scoreboard } from "./Scoreboard";
import React from "react";

// import "./styles.css";

// Clear the existing HTML content

// Render your React component instead
const root = createRoot(document.getElementById("root"));
root.render(<h1>Hello, world</h1>);

// new Balls(Ball, EvilCircle, Scoreboard, 25);

if (module.hot) {
  module.hot.accept();
}
