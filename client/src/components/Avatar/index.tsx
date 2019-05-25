import React from "react";
import styles from "./styles.module.scss";
import { GentleImageWrapper } from "../GentleImageWrapper";
import classNames from "classnames";

interface Props {
  className?: string;
  src: string;
  userName: string;
}

export const Avatar = (props: Props) => {
  return (
    <div className={classNames(props.className, styles.root)}>
      <GentleImageWrapper>
        {({ className, handleLoaded }) => (
          <img
            className={classNames(className, styles.avatar)}
            src={props.src}
            alt={`${props.userName}'s avatar`}
            onLoad={handleLoaded}
          />
        )}
      </GentleImageWrapper>
    </div>
  );
};
