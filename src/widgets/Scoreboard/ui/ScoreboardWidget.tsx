import classes from "../stylesScoreboard.module.scss";

interface PropsI {
  numberBalls: number;
  startGame: () => void;
  stopGame: () => void;
}

export function ScoreboardWidget(props: PropsI) {
  const { numberBalls, startGame, stopGame } = props;

  return (
    <section className={classes.panel}>
      <div className={classes.scoreWrapper}>
        <h2>Счёт:</h2>
        <div id="score">{numberBalls}</div>
      </div>
      <button onClick={startGame}>Старт</button>
      <button onClick={stopGame}>Стоп</button>
    </section>
  );
}
