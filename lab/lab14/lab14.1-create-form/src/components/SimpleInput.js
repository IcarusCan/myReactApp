import { useState } from "react";

const SimpleInput = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputNameTouched, setInputNameTouched] = useState(false);

  const [inputEmail, setInputEmail] = useState("");
  const [inputEmailTouched, setInputEmailTouched] = useState(false);

  const inputNameIsValid = inputName.trim() !== "";
  const inputNameIsInvalid = !inputNameIsValid && inputNameTouched;

  const inputEmailIsValid = inputEmail.includes("@");
  const inputEmailIsInvalid = !inputEmailIsValid && inputEmailTouched;

  let formIsValid = false;

  if (inputNameIsValid && inputEmailIsValid) {
    formIsValid = true;
  }

  // Handler for name input
  const inputNameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const inputNameBlurHandler = () => {
    setInputNameTouched(true);
  };

  // Handler for email input
  const inputEmailChangeHandler = (event) => {
    setInputEmail(event.target.value);
  };
  const inputEmailBlurHandler = () => {
    setInputEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setInputNameTouched(true);
    setInputEmailTouched(true);

    if (!formIsValid) {
      return;
    }
    console.log(inputName);
    console.log(inputEmail);

    // Reset form after submit
    setInputName("");
    setInputNameTouched(false);

    setInputEmail("");
    setInputEmailTouched(false);
  };

  const nameInputClasses = inputNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = inputEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputNameChangeHandler}
          onBlur={inputNameBlurHandler}
          value={inputName}
        />
        {inputNameIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="mail">E-Mail Address</label>
        <input
          type="text"
          id="mail"
          onChange={inputEmailChangeHandler}
          onBlur={inputEmailBlurHandler}
          value={inputEmail}
        />
        {inputEmailIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
