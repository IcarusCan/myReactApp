import { useDispatch } from "react-redux";

import classes from "./Auth.module.css";
import { login } from "../store/auth";
import { useRef } from "react";

const Auth = () => {
  const dispatch = useDispatch();
  const emailInput = useRef();
  const passInput = useRef();

  const loginHandler = (event) => {
    event.preventDefault();

    if (
      emailInput.current.value.trim().length !== 0 &&
      passInput.current.value.trim().length !== 0
    ) {
      dispatch(login());
    } else {
      alert("Wrong input");
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailInput} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passInput} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
