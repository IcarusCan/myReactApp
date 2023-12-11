import React from "react";
import Card from "./Card";

import styles from "../Styles/UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.fullName} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
