export interface TimerDataI {
	seconds: number;
	milliseconds: number;
	stopDate: Date;
}

export interface StopWatch {
	start: () => void;
	stop: () => void;
}
