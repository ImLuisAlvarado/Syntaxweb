import { useEffect, useState } from 'react';

export interface RemainingTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isComplete: boolean;
}

function computeRemaining(targetDate: Date): RemainingTime {
  const diff = targetDate.getTime() - Date.now();

  if (diff <= 0) {
    return { days: '000', hours: '00', minutes: '00', seconds: '00', isComplete: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / 1000 / 60) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  return {
    days: String(days).padStart(3, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(mins).padStart(2, '0'),
    seconds: String(secs).padStart(2, '0'),
    isComplete: false,
  };
}

/** Cuenta en vivo el tiempo restante hasta `targetDate`. Se detiene en 0 al llegar la fecha. */
export function useCountdown(targetDate: Date): RemainingTime {
  const [remaining, setRemaining] = useState<RemainingTime>(() => computeRemaining(targetDate));

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((prev) => (prev.isComplete ? prev : computeRemaining(targetDate)));
    }, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return remaining;
}