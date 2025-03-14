import { CountDownSetter } from "../CountDownSetter/CountDownSetter";
import { CountDownTimer } from "../CountDownTimer/CountDownTimer";
import { useEffect, useState } from "react";
import styles from "./CountDown.module.css";

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
          setIsRunning(false);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  });
  return (
    <div className={styles.countDown}>
      <img
        src="./timer-svgrepo-com.svg"
        className={styles.icon}
        alt="Timer Logo"
      />
      <CountDownTimer remainingTime={remainingTime}></CountDownTimer>
      <CountDownSetter
        handleChange={handleDurationChange}
        disabled={disabled}
      ></CountDownSetter>

      <div className={styles.container}>
        {isRunning ? (
          <button
            className={styles.pauseButton}
            onClick={() => {
              setIsRunning(false);
              setDisabled(false);
            }}
          >
            <img
              src="./pause-circle-svgrepo-com.svg"
              alt="Pause"
              className={styles.icon}
            />
          </button>
        ) : (
          <button
            className={styles.startButton}
            onClick={() => {
              setIsRunning(true);
              setDisabled(true);
            }}
          >
            <img src="./rewind-forward-circle-svgrepo-com.svg" alt="Start" />
          </button>
        )}
        <button
          className={styles.restartButton}
          onClick={() => {
            setRemainingTime(duration);
          }}
        >
          <img src="./restart-circle-svgrepo-com.svg" alt="Restart" />
        </button>
      </div>
    </div>
  );
}
