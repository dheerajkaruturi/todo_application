import Card from "../Card/Card";
import InputForm from "./List_InputForm/InputForm";
import MainHeading from "./MainHeading/MainHeading";
import styles from "./todoinput.module.css";

const ToDoinput = () => {
  return (
    <Card>
      <MainHeading />
      <InputForm />
      <div className={styles.errorText}>
        <p>
          Validations Applied! Alphabetical characters only, minimum of 5 and
          maximum of 100.
        </p>
      </div>
    </Card>
  );
};

export default ToDoinput;
