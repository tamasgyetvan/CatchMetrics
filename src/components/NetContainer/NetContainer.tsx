import styles from "./NetContainer.module.css";
import { Net } from "../Net/Net";
export function NetContainer() {
  return (
    <div className={styles.netContainer}>
      <Net title="Net 1"></Net>
      <Net title="Net 2"></Net>
      <Net title="Net 3"></Net>
    </div>
  );
}
