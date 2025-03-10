type CountDownTimerProps = {
  duration: number;
};
export function CountDownTimer({ duration }: CountDownTimerProps) {
  return (
    <div>
      Minutes:{Math.floor(duration / 60)} Seconds: {duration % 60}{" "}
    </div>
  );
}
