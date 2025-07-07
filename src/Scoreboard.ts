interface ScoreboardProps {
  numberBalls: number;
  startGame: () => void;
  stopGame: () => void;
}

export interface IScoreboard {
  numberBalls: number;
  scoreElement: HTMLDivElement;
  startGame(): void;
  stopGame(): void;
  init(): void;
  createScore(): HTMLDivElement;
  createButton(cliCkHandler: () => void, name: string): HTMLButtonElement;
  setScore(score: number): void;
}

export class Scoreboard implements IScoreboard {
  numberBalls;
  startGame;
  stopGame;
  scoreElement: HTMLDivElement;

  constructor({ numberBalls, startGame, stopGame }: ScoreboardProps) {
    this.numberBalls = numberBalls;
    this.startGame = startGame;
    this.stopGame = stopGame;

    this.init();
  }

  init() {
    const existingPanel = document.querySelector("section.panel");
    if (existingPanel) {
      existingPanel.remove();
    }

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

    this.scoreElement = document.createElement("div");
    this.scoreElement.textContent = String(this.numberBalls);
    this.scoreElement.id = "score";

    scoreWrapper.appendChild(title);
    scoreWrapper.appendChild(this.scoreElement);
    return scoreWrapper;
  }

  createButton(cliCkHandler: () => void, name: string) {
    const button = document.createElement("button");

    button.textContent = name;
    button.addEventListener("click", cliCkHandler);

    return button;
  }

  setScore(score: number) {
    if (this.scoreElement) {
      this.scoreElement.textContent = String(score);
    } else {
      throw new Error("Счётчик score не создан");
    }
  }
}
