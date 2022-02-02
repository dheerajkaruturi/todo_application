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
            style={{ marginTop: "5px", alignItems: "center", color: "#fff" }}
            className="icon ion-ios-checkmark"
          ></i>
        </button>
      </div>
    </form>
  );
};

export default InputForm;
