import React from "react";
import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img alt="Meals" src={mealsImage} />
      </div>
    </>
  );
};

export default Header;
