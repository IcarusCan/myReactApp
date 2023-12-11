import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.title}>
        <h1>Great Quotes</h1>
      </div>

      <div className={styles.navList}>
        <NavLink
          to="/quotes"
          className={({ isActive }) => (isActive ? styles.active : "")}
          end
        >
          All Quotes
        </NavLink>
        <NavLink
          to="/new-quote"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Add a Quote
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
