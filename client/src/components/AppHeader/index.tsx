import React, { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const AppHeader = () => {
  const [isActive, setActive] = useState(true);

  return (
    <header
      className={classNames(styles.AppHeader, {
        [styles.active]: isActive,
        [styles.inactive]: !isActive
      })}
    >
      <div className={styles.dynamicPositioner} />
      <div
        className={styles.inputWrapper}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        // onClick={() => setActive(true)}
      >
        <input type="text" className={styles.input} autoFocus={true} />
      </div>
      <div className={styles.positioner} />
    </header>
  );
};
