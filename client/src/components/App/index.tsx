import React from "react";
import styles from "./App.module.css";
import { AppHeader } from "../AppHeader";
import { List } from "../List";
import { ListItem } from "../ListItem";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { FollowersState } from "../../store/followers/types";
import { SelectedUserState } from "../../store/selectedUser/types";
import { SortingState } from "../../store/sorting/types";
import { AnyAction } from "redux";
import { tryToSetUser } from "../../store/actions";
import { AppState } from "../../store/app/types";
import { ThunkDispatch } from "redux-thunk";
import { IUser } from "../../api/types";

interface AppProps {
  followers: FollowersState;
  selectedUser: SelectedUserState;
  sorting: SortingState;
  app: AppState;
}

const App = (props: AppProps & ReturnType<typeof mapDispatchToProps>) => {
  const sortingFunc = (a: IUser, b: IUser) => {
    const key = props.followers.sorting.key;

    const { direction } = props.followers.sorting;
    const multiplier = direction === "ASC" ? -1 : 1;

    if (key === "NAME") {
      return a.name.localeCompare(b.name) * multiplier;
    }

    if (key === "SCREEN_NAME") {
      return a.accountName.localeCompare(b.accountName) * multiplier;
    }

    return 0;
  };

  const getList: () => IUser[] = () => {
    if (
      props.followers.requestState === "success" &&
      props.followers.data.followers
    ) {
      if (props.followers.sorting.key === null) {
        return props.followers.data.followers;
      }

      return props.followers.data.followers.slice().sort(sortingFunc);
    }

    return [];
  };
  return (
    <div className={styles.App}>
      <AppHeader
        onSetUserAccountName={props.setUserAccountName}
        selectedUser={props.selectedUser}
        isLoading={props.app.isLoading}
      />
      <main className={styles.main}>
        <List>
          {getList().map(item => (
            <ListItem key={item.accountName} item={item} />
          ))}
        </List>
      </main>
    </div>
  );
};

function mapStateToProps({ followers, selectedUser, sorting, app }: RootState) {
  return {
    followers,
    selectedUser,
    sorting,
    app
  };
}

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, AnyAction>) {
  return {
    // @ts-ignore TODO: Enable typing of dispatches.
    setUserAccountName: (userId: string) => dispatch(tryToSetUser(userId))
  };
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
