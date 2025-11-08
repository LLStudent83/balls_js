import type { OnTickCallbackT, SetTimeCallbackT } from "../typesStopwatch";

/**
 * Класс Timer для управления таймером с возможностью старта, паузы и остановки.
 * Предоставляет обновления времени через обратные вызовы.
 */
export class Timer {
	private startTime: number | null = null;
	private elapsedTime: number = 0;
	private isPaused: boolean = false;
	private setTimeCallback: SetTimeCallbackT;
	private onTickCallback: OnTickCallbackT;
	private intervalId: number | null = null;

	/**
	 * Создаёт экземпляр таймера.
	 * @param callbacks Объект с функциями обратного вызова.
	 * @param callbacks.setTime Функция для установки времени при остановке таймера.
	 * @param callbacks.onTick Функция, вызываемая при каждом тике таймера.
	 */
	constructor(callbacks: {
		setTime: SetTimeCallbackT;
		onTick: OnTickCallbackT;
	}) {
		this.setTimeCallback = callbacks.setTime;
		this.onTickCallback = callbacks.onTick;
	}

	/**
	 * Вычисляет количество секунд из прошедшего времени.
	 * @param elapsed Прошедшее время в миллисекундах.
	 * @returns Количество секунд (0–59).
	 * @private
	 */
	private getSecond(elapsed: number): number {
		return Math.floor(elapsed / 1000) % 60;
	}

	/**
	 * Вычисляет количество десятых долей секунды из прошедшего времени.
	 * @param elapsed Прошедшее время в миллисекундах.
	 * @returns Количество десятых долей секунды (0–9).
	 * @private
	 */
	private getMillisecond(elapsed: number): number {
		return Math.floor((elapsed % 1000) / 100);
	}

	/**
	 * Вычисляет количество минут из прошедшего времени.
	 * @param elapsed Прошедшее время в миллисекундах.
	 * @returns Количество минут.
	 * @private
	 */
	private getMinutes(elapsed: number): number {
		const second = Math.floor(elapsed / 1000);
		return Math.floor(second / 60);
	}

	/**
	 * Запускает интервал для периодического обновления времени.
	 * @private
	 */
	private startInterval(): void {
		if (!this.intervalId) {
			this.intervalId = setInterval(() => {
				if (this.startTime !== null && !this.isPaused) {
					const elapsed = this.elapsedTime + (Date.now() - this.startTime);
					this.onTickCallback({
						minutes: this.getMinutes(elapsed),
						seconds: this.getSecond(elapsed),
						milliseconds: this.getMillisecond(elapsed),
					});
				}
			}, 100);
		}
	}

	/**
	 * Запускает или возобновляет таймер.
	 * Если таймер был на паузе, продолжает с учётом сохранённого времени.
	 */
	public start(): void {
		if (this.isPaused) {
			// Возобновление с учётом паузы
			this.startTime = Date.now() - this.elapsedTime;
			this.isPaused = false;
		} else if (this.startTime === null) {
			// Новый старт
			this.startTime = Date.now();
			this.elapsedTime = 0;
		}
		this.startInterval();
	}

	/**
	 * Приостанавливает таймер, сохраняя текущее прошедшее время.
	 */
	public pause(): void {
		if (this.startTime !== null && !this.isPaused) {
			this.elapsedTime += Date.now() - this.startTime;
			this.isPaused = true;
		}
	}

	/**
	 * Останавливает таймер, сбрасывает состояние и вызывает setTimeCallback с финальным временем.
	 */
	public stop(): void {
		if (this.startTime !== null) {
			const elapsed = this.elapsedTime + (Date.now() - this.startTime);
			this.setTimeCallback({
				minutes: this.getMinutes(elapsed),
				seconds: this.getSecond(elapsed),
				milliseconds: this.getMillisecond(elapsed),
				stopDate: new Date(),
			});
			this.startTime = null;
			this.elapsedTime = 0;
			this.isPaused = false;
			if (this.intervalId) {
				clearInterval(this.intervalId);
				this.intervalId = null;
			}
		}
	}
}
