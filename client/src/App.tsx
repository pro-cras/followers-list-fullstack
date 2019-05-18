import React from "react";
import styles from "./App.module.css";
import { AppHeader } from "./components/AppHeader";
import { List } from "./components/List";
import { ListItem } from "./components/ListItem";

const items = [...Array(30)].map((item, i) => ({
  name: `Foo ${i}`,
  accountName: `Lorem${i}`,
  avatar: `https://i.pravatar.cc/300?u=${i}`
}));

export interface IItem {
  name: string;
  accountName: string;
  avatar: string;
}

const App: React.FC = () => {
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

export default App;
