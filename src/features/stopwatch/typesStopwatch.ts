export interface TimerDataI {
	minutes: number;
	seconds: number;
	milliseconds: number;
	stopDate: Date;
}

export type TickDataT = Omit<TimerDataI, "stopDate">;

export type SetTimeCallbackT = (data: TimerDataI) => void;
export type OnTickCallbackT = (data: TickDataT) => void;
