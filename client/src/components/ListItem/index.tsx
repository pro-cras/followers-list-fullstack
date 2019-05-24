import React from "react";
import styles from "./styles.module.scss";
import { IUser } from "../../api/types";
import { Avatar } from "../Avatar";

export const ListItem = (props: { item: IUser }) => {
  const {
    item: { avatar, name, accountName }
  } = props;

  return (
    <li className={styles.item}>
      <a
        href={`https://twitter.com/${accountName}`}
        className={styles.container}
        target="follower_profile"
      >
        <div className={styles.avatarContainer}>
          <Avatar userName={name} src={avatar} />
        </div>
        <div className={styles.nameContainer}>{name}</div>
        <div className={styles.accountNameContainer}>@{accountName}</div>
      </a>
    </li>
  );
};
