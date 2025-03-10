import { FormEventHandler } from "react";

type CountDownSetterProps = {
  handleChange: FormEventHandler<HTMLFormElement>;
  disabled: boolean;
};

export function CountDownSetter({
  handleChange,
  disabled,
}: CountDownSetterProps) {
  return (
    <form onChange={handleChange}>
      <label>
        Set timer (minutes):
        <select name="timer" id="timer" disabled={disabled}>
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
