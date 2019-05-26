import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Button = (props: React.HTMLProps<HTMLButtonElement>) => {
  return (
    // @ts-ignore: TS is being picky about the 'type' prop
    <button {...props} className={classNames(styles.root, props.className)} />
  );
};
