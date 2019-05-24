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
        <>
          <div>Name: {selectedUser.name}</div>
          <div>Screen Name: {selectedUser.accountName}</div>
          <Avatar userName={selectedUser.name} src={selectedUser.avatar} />
        </>
      )}
    </div>
  );
};
