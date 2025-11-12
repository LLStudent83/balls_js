import Stopwatch from 'features/stopwatch';
import { useRef } from 'react';
import { checkStopWatchRef } from '../model/checkStopWatchRef';
import classes from '../stylesScoreboard.module.scss';
import type { StopWatch, TimerDataI } from '../typesScoreboard';

interface PropsI {
  numberBalls: number;
  startGame: () => void;
  stopGame: () => void;
}

export function ScoreboardWidget(props: PropsI) {
  const { numberBalls, startGame, stopGame } = props;
  const stopWatchRef = useRef<StopWatch | null>(null);

  const setTimeHandle = (timeData: TimerDataI) => {
    console.log(JSON.stringify(timeData));
  };

  const startGameHandle = () => {
    checkStopWatchRef(stopWatchRef);
    startGame();
    stopWatchRef.current.start();
  };

  const stopGameHandle = () => {
    checkStopWatchRef(stopWatchRef);
    stopGame();
    stopWatchRef.current.stop();
  };

  return (
    <section className={classes.panel}>
      <div className={classes.buttons}>
        <button type="button" onClick={startGameHandle} className={classes.button}>
          Старт
        </button>
        <button type="button" onClick={stopGameHandle} className={classes.button}>
          Стоп
        </button>
      </div>

      <div className={classes.scoreWrapper}>
        <div>Счёт:</div>
        <div id="score">{numberBalls}</div>
      </div>
      <div>
        <Stopwatch ref={stopWatchRef} setTime={setTimeHandle} />
      </div>
    </section>
  );
}
