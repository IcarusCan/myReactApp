import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

import styles from "../Styles/AddUser.module.css";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [error, setError] = useState(null);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (userInput.trim().length === 0 || ageInput.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty value).",
      });
      return;
    }

    if (+ageInput <= 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }

    // console.log(userInput, ageInput);
    props.onAddUser(userInput, ageInput);
    setUserInput("");
    setAgeInput("");
  };

  const userInputHandler = (e) => {
    return setUserInput(e.target.value);
  };

  const ageInputHandler = (e) => {
    return setAgeInput(e.target.value);
  };

  const errorHandler = () => {
    return setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="nameInput">Username</label>
          <input
            id="nameInput"
            type="text"
            value={userInput}
            onChange={userInputHandler}
          />
          <label htmlFor="ageInput">Age (Years)</label>
          <input
            id="ageInput"
            type="number"
            value={ageInput}
            onChange={ageInputHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
