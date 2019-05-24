import React, { useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  src: string;
  userName: string;
}

export const Avatar = (props: Props) => {
  return (
    <div className={styles.root}>
      <img
        // TODO: add fade-in transition when image is loaded
        className={styles.avatar}
        src={props.src}
        alt={`${props.userName}'s avatar`}
      />
    </div>
  );
};
