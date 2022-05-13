import React, { useState } from "react";
import Button from "./Button";
import styles from "./Styles/Form.module.css";

const Form = (props) => {
  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredAge: "",
  });

  const [isValid, setIsValid] = useState({
    nameInput: true,
    ageInput: true,
  });

  const nameChangeHandler = (event) => {
    console.log(event.target.value);
    if (event.target.value.trim().length === 0) {
      setIsValid({
        ...isValid,
        nameInput: false,
      });
    }
    setUserInput({
      ...userInput,
      enteredName: event.target.value,
    });
    setIsValid({
      ...isValid,
      nameInput: true,
    });
  };
  const ageChangeHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setIsValid({
        ...isValid,
        ageInput: false,
      });
    }
    setUserInput({
      ...userInput,
      enteredAge: event.target.value,
    });
    setIsValid({
      ...isValid,
      ageInput: true,
    });
  };

  return (
    <form className={styles.form}>
      <label>Username</label>
      <input
        className={isValid.nameInput === false ? styles.invalid : ""}
        value={userInput.enteredName}
        onChange={nameChangeHandler}
      />
      <label>Age (Years)</label>
      <input
        className={isValid.ageInput === false ? styles.invalid : ""}
        value={userInput.enteredAge}
        onChange={ageChangeHandler}
        type="number"
        min = "0"
        max = "120"
      />
      <Button
        setIsValid={setIsValid}
        onSubm={setUserInput}
        onAddUser={props.onAddUser}
        array={props.array}
        input={userInput}
      >
        Add User
      </Button>
    </form>
  );
};

export default Form;
