import { useState, useEffect } from "react";

interface TimerProps {
  seconds: number;
  onTimeOut: () => void;
}

export default function Timer({ seconds, onTimeOut }: TimerProps) {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="text-center text-lg">⏱️ Time: {time}s</div>;
}
