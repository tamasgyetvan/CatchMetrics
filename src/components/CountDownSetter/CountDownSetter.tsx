import { FormEventHandler } from "react";
import styles from "./CountDownSetter.module.css";
type CountDownSetterProps = {
  handleChange: FormEventHandler<HTMLFormElement>;
  disabled: boolean;
};

export function CountDownSetter({
  handleChange,
  disabled,
}: CountDownSetterProps) {
  return (
    <form className={styles.form} onChange={handleChange}>
      <label className={styles.label}>
        Duration:
        <select
          name="timerSetter"
          className={styles.timerSetter}
          disabled={disabled}
        >
          <option value="2">2 minutes</option>
          <option value="3">3 minutes</option>
          <option value="5">5 minutes</option>
          <option value="8">8 minutes</option>
          <option value="10">10 minutes</option>
        </select>
      </label>
    </form>
  );
}
