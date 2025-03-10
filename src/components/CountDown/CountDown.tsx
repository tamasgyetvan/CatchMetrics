import { CountDownSetter } from "../CountDownSetter/CountDownSetter";
import { CountDownTimer } from "../CountDownTimer/CountDownTimer";
import { useEffect, useState } from "react";

export function CountDown() {
  const [disabled, setDisabled] = useState<boolean>(false); //Stores boolean that is used to disable CountDownSetter form when a timer is running
  const [isRunning, setIsRunning] = useState<boolean>(false); //Stores boolean that is used to control the running of timer
  const [latestDuration, setLatestDuration] = useState<number>(120); //Stores the latest duration set
  const [duration, setDuration] = useState<number>(120); //Stores remaining time

  function handleDurationChange(event: React.FormEvent) {
    const target = event.target as HTMLInputElement;
    const value = Number(target.value) * 60;
    setDuration(value);
    setLatestDuration(value);
  }
  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        if (duration > 0) {
          setDuration(duration - 1);
        } else {
          clearInterval(timer);
          setDuration(0);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  });
  return (
    <div className="countDown">
      <CountDownSetter
        handleChange={handleDurationChange}
        disabled={disabled}
      ></CountDownSetter>
      <CountDownTimer duration={duration}></CountDownTimer>
      <button
        onClick={() => {
          setIsRunning(true);
          setDisabled(true);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          setIsRunning(false);
          setDisabled(false);
        }}
      >
        Stop
      </button>
      <button
        onClick={() => {
          setDuration(latestDuration);
        }}
      >
        Reset latest timer
      </button>
    </div>
  );
}
