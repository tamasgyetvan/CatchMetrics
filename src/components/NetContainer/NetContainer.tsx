import styles from "./NetContainer.module.css";
import { Net } from "../Net/Net";
export function NetContainer() {
  return (
    <div className={styles.netContainer}>
      <Net title="Net 1"></Net>
    </div>
  );
}
