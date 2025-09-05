import { Ball } from "entities/Ball";
import { Balls } from "widgets/Balls";
import { EvilCircle } from "entities/EvilCircle";
import { Scoreboard } from "widgets/Scoreboard";
import React, { useEffect, useRef } from "react";
import "./styles/styles.css";

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      new Balls(Ball, EvilCircle, Scoreboard, 25, canvasRef.current);
    }
  }, []);

  return (
    <section>
      <canvas ref={canvasRef}></canvas>
    </section>
  );
}

export default App;
