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
      onFocus={() => setActive(true)}
      onBlur={() => setActive(true)}
    >
      <div className={styles.dynamicPositioner} />
      <form
        id="user_form"
        className={styles.transformer}
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
        form="user_form"
        disabled={!accountName}
        className={styles.submitButton}
      >
        OK
      </button>
      <div className={styles.positioner} />
    </header>
  );
};
