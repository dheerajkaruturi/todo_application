import styles from "./inputform.module.css";

const InputForm = () => {
  return (
    <form>
      <div className={styles.formContainer}>
        <input
          type="text"
          className={styles.form_control}
          placeholder="Type from Here"
        />
        <button className={styles.addButton}>
          <i
            style={{ marginTop: "5px", alignItems: "center" }}
            className="icon ion-ios-checkmark"
          ></i>
        </button>
      </div>
      <div>
        <p>validations from here</p>
      </div>
    </form>
  );
};

export default InputForm;
