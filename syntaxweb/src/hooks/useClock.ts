import { useEffect, useState } from 'react';

/** Devuelve la hora actual en formato HH:MM:SS, actualizada cada segundo. */
export function useClock(): string {
  const [time, setTime] = useState<string>(() => new Date().toTimeString().split(' ')[0]);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toTimeString().split(' ')[0]);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
