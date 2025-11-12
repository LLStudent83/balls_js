import { type Ref, useImperativeHandle, useRef, useState } from 'react';
import { Timer } from '../model/Timer';
import type { TickDataT, TimerDataI } from '../typesStopwatch';

const timerDataInit = {
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
};

interface PropsI {
  setTime: (data: TimerDataI) => void;
  ref: Ref<{ start: () => void; stop: () => void } | null>;
}

export default function Stopwatch(props: PropsI) {
  const { setTime, ref } = props;

  const [tick, setTick] = useState<TickDataT>(timerDataInit);

  const onTick = (tick: TickDataT) => {
    setTick(tick);
  };

  const timerRef = useRef(new Timer({ setTime, onTick }));

  useImperativeHandle(ref, () => {
    return {
      start: () => {
        timerRef.current.start();
      },
      stop: () => {
        timerRef.current.stop();
      },
    };
  }, []);

  const time = `${tick.minutes.toString().padStart(2, '0')}:${tick.seconds.toString().padStart(2, '0')}:${tick.milliseconds}`;

  return <div>{time}</div>;
}

/*
TODO
- реализовать остановку игры если таймер превысил 99 минут
- показать сообщение что то типа "Вы похоже заснули?"
*/
