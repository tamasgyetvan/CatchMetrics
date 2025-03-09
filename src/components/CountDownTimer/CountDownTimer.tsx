import { useEffect, useState } from "react";

type CountDownTimerProps = {
  duration: number;
};
export function CountDownTimer({ duration }: CountDownTimerProps) {
  const [time, setTime] = useState<number>(duration);
  console.log(time);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => time - 1);
      console.log(time);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      Minutes:{Math.floor(time / 60)} Seconds: {time % 60}{" "}
    </div>
  );
}
