import { CountDownSetter } from "../CountDownSetter/CountDownSetter";
import { CountDownTimer } from "../CountDownTimer/CountDownTimer";
import { useEffect, useState } from "react";

export function CountDown() {
  const [duration, setDuration] = useState<number>(5);

  useEffect(() => {
    const timer = setInterval(() => {
      if (duration == 0) {
        clearInterval(timer);
        setDuration(0);
      } else {
        setDuration(duration - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  return (
    <div className="countDown">
      <CountDownSetter
        handleChange={(event) => {
          const target = event.target as HTMLInputElement;
          const value = Number(target.value);
          setDuration(value * 60);
        }}
      ></CountDownSetter>
      <CountDownTimer duration={duration}></CountDownTimer>
    </div>
  );
}
