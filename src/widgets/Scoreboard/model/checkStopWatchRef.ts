import type { StopWatch } from '../typesScoreboard';

export const checkStopWatchRef: (
  ref: React.RefObject<StopWatch | null>,
) => asserts ref is React.RefObject<StopWatch> = (ref: React.RefObject<StopWatch | null>) => {
  if (ref.current === null) {
    throw new Error('Объект с методами для управления таймером не задан');
  }
};
