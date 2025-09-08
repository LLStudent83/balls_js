import { useState } from "react";
import { Layout } from "shared/ui/layout";
import { BallsWidget } from "widgets/Balls";

export function GamePage() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGameHandler = () => {
    setGameStarted(true);
  };

  const stopGameHandler = () => {
    setGameStarted(false);
  };

  return <Layout>{<BallsWidget />}</Layout>;
}
