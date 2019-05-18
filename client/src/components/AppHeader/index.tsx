import React, { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { SelectedUserState } from "../../store/selectedUser/types";

interface Props {
  onSetUserAccountName: (name: string) => void;
  selectedUser: SelectedUserState;
}

export const AppHeader = (props: Props) => {
  const [isActive, setActive] = useState(true);
  const [accountName, setAccountName] = useState("");

  return (
    <header
      className={classNames(styles.AppHeader, {
        [styles.active]: isActive,
        [styles.inactive]: !isActive
      })}
    >
      <div className={styles.dynamicPositioner} />
      <form
        className={styles.transformer}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        onSubmit={e => {
          props.onSetUserAccountName(accountName);
          e.preventDefault();
        }}
      >
        <div className={styles.inputWrapper}>
          <input
            type="text"
            name="accountName"
            className={styles.input}
            autoFocus={true}
            onChange={e => setAccountName(e.target.value)}
            autoComplete={"off"}
          />
        </div>
      </form>
      {/* TODO: fadebutton away */}
      <button
        type="submit"
        disabled={!accountName}
        className={styles.submitButton}
      >
        OK
      </button>
      <div className={styles.positioner} />
    </header>
  );
};
