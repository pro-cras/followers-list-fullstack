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
import SortIcon from "@material-ui/icons/Sort";
import {
  SortingDirection,
  FollowerSortingKey
} from "../../store/followers/types";
import { setFollowersSorting } from "../../store/followers/actions";

interface Props {
  className?: string;
  onNext: () => void;
  onPrev: () => void;
  sortingDirection: SortingDirection;
  sortingKey: FollowerSortingKey | null;
  onSortByScreenName: (direction: SortingDirection) => void;
  onSortByName: (direction: SortingDirection) => void;
  hasNext: boolean;
  hasPrev: boolean;
}

const FollowerListControls = (props: Props) => {
  const { sortingKey, sortingDirection } = props;

  return (
    <div className={classNames(props.className, styles.root)}>
      <div className={styles.controlGroup}>
        Sorting:
        <button
          className={styles.button}
          onClick={() => {
            if (sortingKey === "NAME") {
              // Flip direction
              props.onSortByName(sortingDirection === "ASC" ? "DESC" : "ASC");
            } else {
              props.onSortByName(sortingDirection);
            }
          }}
        >
          Name <FlippableSortIcon direction={sortingDirection} />
        </button>
        <button
          className={styles.button}
          onClick={() => {
            if (sortingKey === "SCREEN_NAME") {
              // Flip direction
              props.onSortByScreenName(
                sortingDirection === "ASC" ? "DESC" : "ASC"
              );
            } else {
              props.onSortByScreenName(sortingDirection);
            }
          }}
        >
          Screen Name <FlippableSortIcon direction={sortingDirection} />
        </button>
      </div>
      <div className={styles.controlGroup}>
        Paging:
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
    </div>
  );
};

function mapStateToProps({ followers }: RootState) {
  return {
    sortingDirection: followers.sorting.direction,
    sortingKey: followers.sorting.key,
    hasNext: followers.data !== null && followers.data.next_cursor !== "0",
    hasPrev: followers.data !== null && followers.data.previous_cursor !== "0"
  };
}

function mapDispatchToProps(
  dispatch: ThunkDispatch<RootState, any, AnyAction>
) {
  return {
    onSortByScreenName: (direction: SortingDirection) =>
      dispatch(setFollowersSorting(direction, "SCREEN_NAME")),
    onSortByName: (direction: SortingDirection) =>
      dispatch(setFollowersSorting(direction, "NAME")),
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

const FlippableSortIcon = ({ direction }: { direction: SortingDirection }) => (
  <SortIcon
    className={classNames(styles.flippableSortIcon, {
      [styles.flip]: direction === "DESC"
    })}
  />
);
