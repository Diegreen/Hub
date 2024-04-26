import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Inputs = forwardRef(({ label, error ,...rest }, ref) => {
  return (
    <div className={styles.inputsDiv}>
      <label>
        {label}
      </label>
        <input ref={ref} {...rest} />
        {error ? <p className="error-message">{error?.message}</p> : ""}
    </div>
  );
});
