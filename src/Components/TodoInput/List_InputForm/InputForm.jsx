import { useEffect, useState } from "react";
import styles from "./inputform.module.css";

const InputForm = (props) => {
  const initialState = { description: "" };
  const [inputValue, setInputValue] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [taskStatus, setTaskStatus] = useState(false);

  //? creating date and time:

  const today = new Date();

  //* current date part:
  const date = appendZero(today.getDate());
  const month = appendZero(today.getMonth() + 1);
  const year = today.getFullYear();

  const currentDate = `${date}/${month}/${year}`;

  //* current time part:
  const hours = appendZero(today.getHours());
  const minutes = appendZero(today.getMinutes());

  //* now these hours and minutes may have single digit values hence we append a zero if they are single digit.

  function appendZero(number) {
    const afterAppend = number < 10 ? `0${number}` : number;
    return afterAppend;
  }

  const currentTime = `${hours}:${minutes}`;

  //? this object should be posted to firebase:

  const objectData_thatShouldbePosted = {
    description: inputValue.description,
    createdOn: `${currentTime}, ${currentDate}`,
    status: taskStatus,
  };

  //! input change handler:
  const inputChangeHandler = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  //! form submission:
  const formSubmitHandler = (event) => {
    event.preventDefault();

    setErrors(formValidation(inputValue));

    //? posting input values through props conditionally.
    if (
      isSubmit &&
      inputValue.description.trim().length > 5 &&
      inputValue.description.trim().length < 100
    ) {
      props.dataPostHandler(objectData_thatShouldbePosted);
    } else {
      return;
    }

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
    }
    if (value.description.length > 100) {
      errors.description =
        "Validations Applied! Alphabetical characters maximum of 100.";
    }
    return errors;
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles.formContainer}>
        <span className={styles.arrowGlyph}>→</span>
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.form_control}
            placeholder="Write a note..."
            name="description"
            onChange={inputChangeHandler}
            value={inputValue.description}
          />
        </div>

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
