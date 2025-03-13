import styles from "./CountDownTimer.module.css";

type CountDownTimerProps = {
  remainingTime: number;
};

function isOneDigit(number: number) {
  const minutes = number % 60;
  if (minutes.toString().length > 1) {
    return false;
  }
  return true;
}

console.log(isOneDigit(5));
console.log(isOneDigit(15));
export function CountDownTimer({ remainingTime }: CountDownTimerProps) {
  return (
    <div className={styles.countDownTimer}>
      {Math.floor(remainingTime / 60)}:
      {isOneDigit(remainingTime)
        ? "0" + (remainingTime % 60)
        : remainingTime % 60}
    </div>
  );
}
