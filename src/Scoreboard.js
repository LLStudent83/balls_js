export class Scoreboard {
  numberBalls;
  startGame;
  constructor({ numberBalls, startGame, stopGame }) {
    this.numberBalls = numberBalls;
    this.startGame = startGame;
    this.stopGame = stopGame;

    this.init();
  }

  init() {
    const panel = document.createElement("section");
    panel.classList.add("panel");
    const score = this.createScore();
    const startButton = this.createButton(this.startGame, "Старт");
    const stopButton = this.createButton(this.stopGame, "Стоп игра");

    panel.appendChild(score);
    panel.appendChild(startButton);
    panel.appendChild(stopButton);

    document.body.appendChild(panel);
  }

  createScore() {
    const scoreWrapper = document.createElement("div");
    scoreWrapper.classList.add("scoreWrapper");

    const title = document.createElement("h2");
    title.textContent = "Счёт:";

    this.score = document.createElement("div");
    this.score.textContent = this.numberBalls;
    this.score.id = "score";

    scoreWrapper.appendChild(title);
    scoreWrapper.appendChild(this.score);
    return scoreWrapper;
  }

  createButton(cliCkHandler, name) {
    const button = document.createElement("button");

    button.textContent = name;
    button.addEventListener("click", cliCkHandler);

    return button;
  }

  setScore(score) {
    if (this.score) {
      this.score.textContent = score;
    } else {
      throw new Error("Счётчик score не создан");
    }
  }
}
