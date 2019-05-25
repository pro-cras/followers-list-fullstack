import React, { useState, ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { IUser } from "../../api/types";
import { Avatar } from "../Avatar";

interface Props {
  children: (p: ChildrenProps) => ReactNode;
}

interface ChildrenProps {
  className: string;
  handleLoaded: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const GentleImageWrapper = (props: Props) => {
  const [loaded, setLoaded] = useState(false);

  const className = classNames(styles.willLoad, {
    [styles.notLoaded]: !loaded
  });
  const handler = () => setLoaded(true);

  return <>{props.children({ className, handleLoaded: handler })}</>;
};
