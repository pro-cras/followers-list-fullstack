import React, { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { IUser } from "../../api/types";
import { Avatar } from "../Avatar";

interface Props {
  selectedUser: IUser | null;
}

export const ControlBar = (props: Props) => {
  const { selectedUser } = props;
  return (
    <div className={styles.root}>
      {selectedUser && (
        <div className={styles.selectedUser}>
          <Avatar
            className={styles.userAvatar}
            userName={selectedUser.name}
            src={selectedUser.avatar}
          />
          <div className={styles.userDetails}>
            <div>{selectedUser.name}</div>
            <div className={styles.screenName}>@{selectedUser.accountName}</div>
          </div>
        </div>
      )}
    </div>
  );
};
