import React from "react";
import styles from "./styles.module.scss";
import { IItem } from "../../App";

export const ListItem = (props: { item: IItem }) => {
  const {
    item: { avatar, name, accountName }
  } = props;

  return (
    <li className={styles.item}>
      <a
        href={`https://twitter.com/${accountName}`}
        className={styles.container}
      >
        <div className={styles.avatarContainer}>
          <div className={styles.avatarWrapper}>
            <img
              className={styles.avatar}
              src={avatar}
              alt={`${name}'s avatar`}
            />
          </div>
        </div>
        <div className={styles.nameContainer}>{name}</div>
        <div className={styles.accountNameContainer}>@{accountName}</div>
      </a>
    </li>
  );
};
