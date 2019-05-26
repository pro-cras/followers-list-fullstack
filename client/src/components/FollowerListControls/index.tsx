import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { RootState } from "../../store";
import { ThunkDispatch } from "redux-thunk";
import { fetchFollowersPage } from "../../store/actions";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

interface Props {
  className?: string;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

const FollowerListControls = (props: Props) => {
  return (
    <div className={classNames(props.className, styles.root)}>
      <button
        className={styles.button}
        onClick={props.onPrev}
        disabled={!props.hasPrev}
      >
        <NavigateBeforeIcon />
      </button>
      <button
        className={styles.button}
        onClick={props.onNext}
        disabled={!props.hasNext}
      >
        <NavigateNextIcon />
      </button>
    </div>
  );
};

function mapStateToProps({ followers }: RootState) {
  return {
    hasNext: followers.data !== null && followers.data.next_cursor !== "0",
    hasPrev: followers.data !== null && followers.data.previous_cursor !== "0"
  };
}

function mapDispatchToProps(
  dispatch: ThunkDispatch<RootState, any, AnyAction>
) {
  return {
    // @ts-ignore
    onNext: () => dispatch(fetchFollowersPage("next")),
    // @ts-ignore
    onPrev: () => dispatch(fetchFollowersPage("prev"))
  };
}

const Augmented = connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowerListControls);

export { Augmented as FollowerListControls };
