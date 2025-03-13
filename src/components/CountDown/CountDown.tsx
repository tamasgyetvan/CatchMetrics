import { CountDownSetter } from "../CountDownSetter/CountDownSetter";
import { CountDownTimer } from "../CountDownTimer/CountDownTimer";
import { useEffect, useState } from "react";

export function CountDown() {
  const [disabled, setDisabled] = useState<boolean>(false); //Stores boolean that is used to disable CountDownSetter form when a timer is running
  const [isRunning, setIsRunning] = useState<boolean>(false); //Stores boolean that is used to control the running of timer
  const [remainingTime, setRemainingTime] = useState<number>(120); //Stores remaining time
  const [duration, setDuration] = useState<number>(120); //Stores time set by the input

  function handleDurationChange(event: React.FormEvent) {
    const target = event.target as HTMLInputElement;
    const value = Number(target.value) * 60;
    setDuration(value);
    setRemainingTime(value);
  }
  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        if (remainingTime > 0) {
          setRemainingTime(remainingTime - 1);
        } else {
          clearInterval(timer);
          setRemainingTime(0);
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
      <CountDownTimer remainingTime={remainingTime}></CountDownTimer>
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
          setRemainingTime(duration);
        }}
      >
        Reset latest timer
      </button>
    </div>
  );
}
