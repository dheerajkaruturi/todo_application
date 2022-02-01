import Card from "../Card/Card";
import InputForm from "./List_InputForm/InputForm";
import MainHeading from "./MainHeading/MainHeading";
import styles from "./todoinput.module.css";

const ToDoinput = () => {
  return (
    <Card>
      <MainHeading />
      <InputForm />
    </Card>
  );
};

export default ToDoinput;
