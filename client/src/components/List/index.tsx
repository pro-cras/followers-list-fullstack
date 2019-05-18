import React from "react";
import styles from "./styles.module.css";

export const List: React.FC = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};
