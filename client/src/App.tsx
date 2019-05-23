import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { AppHeader } from "./components/AppHeader";
import { List } from "./components/List";
import { ListItem } from "./components/ListItem";
import { apiClient } from "./api/ApiClient";
import { IUser } from "./api/types";
import { connect } from "react-redux";
import { RootState } from "./store";
import { FollowersState } from "./store/followers/types";
import { SelectedUserState } from "./store/selectedUser/types";
import { SortingState } from "./store/sorting/types";
import { Dispatch } from "redux";
import { setSelectedUser } from "./store/selectedUser/actions";
import { tryToSetUser } from "./store/actions";
import { AppState } from "./store/app/types";

// const items = [...Array(30)].map((item, i) => ({
//   name: `Foo ${i}`,
//   accountName: `Lorem${i}`,
//   avatar: `https://i.pravatar.cc/300?u=${i}`
// }));
interface AppProps {
  followers: FollowersState;
  selectedUser: SelectedUserState;
  sorting: SortingState;
  app: AppState;
}

const App = (props: AppProps & ReturnType<typeof mapDispatchToProps>) => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await apiClient.getUserFollowers("1");
  //     if (data.followers) {
  //       setItems(data.followers);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className={styles.App}>
      <AppHeader
        onSetUserAccountName={props.setUserAccountName}
        selectedUser={props.selectedUser}
        isLoading={props.app.isLoading}
      />
      <main className={styles.main}>
        {/* TODO: Add status & Controls bar: 
            selected user details (avatar, name, accountName) + clear
            next/prev paging controls 
            */}
        <List>
          {/* TODO: Add react transition group for nice eter/exit effect */}
          {props.followers &&
            props.followers.map(item => (
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

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    // @ts-ignore
    setUserAccountName: (userId: string) => dispatch(tryToSetUser(userId))
  };
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
