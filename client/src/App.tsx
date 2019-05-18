import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { AppHeader } from "./components/AppHeader";
import { List } from "./components/List";
import { ListItem } from "./components/ListItem";
import { apiClient } from "./api/ApiClient";
import { IUser } from "./api/types";
import { connect } from "react-redux";

// const items = [...Array(30)].map((item, i) => ({
//   name: `Foo ${i}`,
//   accountName: `Lorem${i}`,
//   avatar: `https://i.pravatar.cc/300?u=${i}`
// }));

const App: React.FC = () => {
  const [items, setItems] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiClient.getUserFollowers("1");
      if (data.followers) {
        setItems(data.followers);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.App}>
      <AppHeader />
      <main className={styles.main}>
        <List>
          {items.map(item => (
            <ListItem key={item.accountName} item={item} />
          ))}
        </List>
      </main>
    </div>
  );
};

function mapStateToProps() {}

function mapDispatchToProps() {}
const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
