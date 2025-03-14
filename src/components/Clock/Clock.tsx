import { useEffect, useState } from "react";
import styles from "./Clock.module.css";
type CurrentTime = {
  hours: number;
  minutes: number;
  seconds: number;
};
export function Clock() {
  const [currentTime, setCurrentTime] = useState<CurrentTime>();

  useEffect(() => {
    setInterval(() => {
      const time = new Date();

      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();

      setCurrentTime({ hours, minutes, seconds });
    }, 1000);
  });

  return (
    <div className={styles.clock}>
      <img
        src="./clock-two-svgrepo-com(1).svg"
        alt="Clock Logo"
        className={styles.icon}
      />

      <div>
        <span className="hours">{currentTime?.hours}:</span>
        <span className="minutes">{currentTime?.minutes}:</span>
        <span className="seconds">{currentTime?.seconds}</span>
      </div>
      <h2 className={styles.title}>Current time</h2>
    </div>
  );
}
