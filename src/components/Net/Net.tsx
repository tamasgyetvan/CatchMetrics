import { useState } from "react";
import styles from "./Net.module.css";
type NetProps = {
  title: string;
};
export function Net({ title }: NetProps) {
  const [count, setCount] = useState(0);
  const [weight, setWeight] = useState(0);

  return (
    <div className={styles.net}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.counter}>
        <h3>Count (pc)</h3>
        <p>{count}</p>
        <div className={styles.buttonContainer}>
          <button
            className={styles.increment}
            onClick={() => setCount(count + 1)}
          >
            <img src="./add-circle-svgrepo-com.svg" alt="Increment" />
          </button>
          <button
            className={styles.decrement}
            onClick={() => (count == 0 ? setCount(0) : setCount(count - 1))}
          >
            <img src="./minus-circle-svgrepo-com.svg" alt="Decrement" />
          </button>
        </div>
      </div>
      <div className={styles.weight}>
        <h3>Weight (kg)</h3>
        <p>{weight}</p>
        <div className={styles.buttonContainer}>
          <button
            className={styles.increment}
            onClick={() => setWeight(weight + 1)}
          >
            <img src="./add-circle-svgrepo-com.svg" alt="Increment" />
          </button>
          <button
            className={styles.decrement}
            onClick={() => (weight == 0 ? setWeight(0) : setWeight(weight - 1))}
          >
            <img src="./minus-circle-svgrepo-com.svg" alt="Decrement" />
          </button>
        </div>
      </div>
    </div>
  );
}
