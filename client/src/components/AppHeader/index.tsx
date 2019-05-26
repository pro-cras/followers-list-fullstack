import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { SelectedUserState } from "../../store/selectedUser/types";
import SearchIcon from "@material-ui/icons/Search";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ControlBar } from "../ControlBar";
import { useScrollDirectionChange } from "../../reactHooks/useScrollDirectionChange";
import debounce from "lodash.debounce";
import { useScroll } from "../../reactHooks/useScroll";

interface Props {
  onSetUserAccountName: (name: string) => void;
  selectedUser: SelectedUserState;
  isLoading: boolean;
}

export const AppHeader = (props: Props) => {
  const [isActive, setActive] = useState(true);
  const [accountName, setAccountName] = useState("");
  const [direction, setDirection] = useState(0);
  const debouncedScroll = debounce(useScroll, 100, {
    leading: true,
    trailing: false
  });

  const scroll = debouncedScroll();
  useEffect(() => {
    if (scroll == 0) {
      setActive(true);
    }
    if (scroll > 200) {
      setActive(false);
    }
  }, [scroll]);

  return (
    <header
      className={classNames(styles.root, {
        [styles.active]: isActive,
        [styles.inactive]: !isActive
      })}
    >
      <div className={styles.searchBar}>
        <div className={styles.dynamicPositioner}>{direction}</div>
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
        <button
          type="submit"
          form="user_form"
          disabled={props.isLoading || !accountName}
          className={styles.submitButton}
        >
          {props.isLoading ? <CircularProgress /> : <SearchIcon />}
        </button>
        <div className={styles.positioner} />
      </div>
      <ControlBar selectedUser={props.selectedUser} />
    </header>
  );
};
