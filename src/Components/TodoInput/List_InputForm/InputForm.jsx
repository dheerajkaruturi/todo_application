import { useEffect, useState } from "react";
import styles from "./inputform.module.css";
//import { db } from "../../../firebase-config.js";

const InputForm = () => {
  const initialState = { description: "" };
  const [inputValue, setInputValue] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //! input change handler:
  const inputChangeHandler = (event) => {
    console.log(event.target.value);
    console.log(event.target.value, event.target.name, inputValue);
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  //! form submission:
  const formSubmitHandler = (event) => {
    event.preventDefault();

    setErrors(formValidation(inputValue));
    setInputValue(initialState);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
    } else {
      setIsSubmit(false);
    }
  }, [errors]);

  //? form validation logic:
  const formValidation = function (value) {
    const errors = {};

    //* input validations conditions:

    if (value.description.length < 5) {
      errors.description =
        "Validations Applied! Alphabetical characters only with minimum of 5.";
    } else if (value.description.length > 100) {
      errors.description =
        "Validations Applied! Alphabetical characters maximum of 100.";
    } else {
      console.log("No Errors");
    }
    return errors;
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles.formContainer}>
        <span className={styles.arrowGlyph}>→</span>
        <input
          type="text"
          className={styles.form_control}
          placeholder="Make your note from here"
          name="description"
          onChange={inputChangeHandler}
          value={inputValue.description}
        />
        <button className={styles.addButton}>
          <i
            style={{ marginTop: "5px", alignItems: "center", color: "#fff" }}
            className="icon ion-ios-checkmark"
          ></i>
        </button>
      </div>
      {!isSubmit && (
        <div className={styles.errorText}>
          <p>{errors.description}</p>
        </div>
      )}
    </form>
  );
};

export default InputForm;
