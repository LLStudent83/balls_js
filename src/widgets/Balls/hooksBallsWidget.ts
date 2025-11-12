import { useEffect } from 'react';

interface UseControlGameArgsI {
  startGame: (canvas: HTMLCanvasElement) => void;
  stopGame: () => void;
  canvasElement: HTMLCanvasElement | null;
  gameStarted: boolean;
}

export const useControlGame = ({
  startGame,
  stopGame,
  canvasElement,
  gameStarted,
}: UseControlGameArgsI) => {
  useEffect(() => {
    if (gameStarted) {
      if (canvasElement) {
        startGame(canvasElement);
      }
    } else {
      stopGame();
    }
  }, [gameStarted, canvasElement, startGame, stopGame]);
};
