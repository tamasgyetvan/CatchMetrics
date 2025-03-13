type CountDownTimerProps = {
  remainingTime: number;
};
export function CountDownTimer({ remainingTime }: CountDownTimerProps) {
  return (
    <div>
      Minutes:{Math.floor(remainingTime / 60)} Seconds: {remainingTime % 60}{" "}
    </div>
  );
}
