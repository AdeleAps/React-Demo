import styles from "./Styles/Button.module.css";
import react, { useState } from "react";

const Button = (props) => {
  const [modalPrompt, setModalPrompt] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      props.input.enteredName.trim().length > 0 &&
      props.input.enteredAge.trim().length > 0
    ) {
      props.array.push(props.input);
      props.onAddUser(props.array);
      props.onSubm({
        enteredName: "",
        enteredAge: "",
      });
    } else {
      setModalPrompt(true);
      props.setIsValid({
        nameInput: false,
        ageInput: false,
      });
    }
  };

  const promptHandler = (event) => {
    event.preventDefault();
    setModalPrompt(false);
  };

  const closeModal = (event) => {
    if (modalPrompt === true) {
      setModalPrompt(false);
    }
  }

  const modal = (
    <div onClick={closeModal} className={styles["modal"]}>
      <div className={styles["modal-box"]}>
        <h3>Invalid Input</h3>
        <div className={styles["modal-lower-container"]}>
          <h4>Please enter a valid name and age.</h4>
          <button onClick={promptHandler} className={styles.button}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );

  if (modalPrompt === true) {
    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     setModalPrompt(false);
    //   }
    // }
    const modalButton = document.getElementById("modal-button");
    modalButton.addEventListener("click", function() {
    setModalPrompt(false);
     } )
  }
  
  return (
    <div className={styles["button-container"]}>
      <button id="modal-button" type="submit" onClick={submitHandler} className={styles.button}>
        {props.children}
      </button>
      {modalPrompt === true && modal}
    </div>
  );
};

export default Button;
