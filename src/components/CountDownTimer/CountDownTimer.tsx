import styles from "./CountDownTimer.module.css";

type CountDownTimerProps = {
  remainingTime: number;
};
export function CountDownTimer({ remainingTime }: CountDownTimerProps) {
  return (
    <div className={styles.CountDownTimer}>
      {Math.floor(remainingTime / 60)}:{remainingTime % 60}
    </div>
  );
}
