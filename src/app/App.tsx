import { Ball } from "entities/Ball";
import { Balls } from "widgets/Balls";
import { EvilCircle } from "entities/EvilCircle";
import { Scoreboard } from "widgets/Scoreboard";
import React, { useEffect, useRef } from "react";
import "./styles.css";

function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      new Balls(Ball, EvilCircle, Scoreboard, 25, containerRef.current);
    }
  }, []);

  return <section ref={containerRef}></section>;
}

export default App;
