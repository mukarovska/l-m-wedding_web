import { useEffect, useState } from 'react';
import './Countdown.scss';
import { TimeFragment } from '../timeFragment/TimeFragment';

interface TimeObj {
  days: number;
  hours: number;
  mins: number;
  secs: number;
}

export const Countdown = () => {
  const targetDate = '2026-08-22T12:00:00';
  const [timeLeft, setTimeLeft] = useState<TimeObj>({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeObj => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          mins: 0,
          secs: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown section">
      <div className="countdown__wrap section__wrap">
        <TimeFragment title="dny" value={timeLeft.days} />
        <TimeFragment title="hod" value={timeLeft.hours} />
        <TimeFragment title="min" value={timeLeft.mins} />
        <TimeFragment title="sec" value={timeLeft.secs} />
      </div>
    </div>
  );
};
