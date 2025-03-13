import styles from "./CountDownTimer.module.css";

type CountDownTimerProps = {
  remainingTime: number;
};
export function CountDownTimer({ remainingTime }: CountDownTimerProps) {
  return (
    <div className={styles.countDownTimer}>
      {Math.floor(remainingTime / 60)}:{remainingTime % 60}
    </div>
  );
}
