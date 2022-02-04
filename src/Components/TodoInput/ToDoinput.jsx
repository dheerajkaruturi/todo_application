import Card from "../Card/Card";
import InputForm from "./List_InputForm/InputForm";
import MainHeading from "./MainHeading/MainHeading";

const ToDoinput = (props) => {
  return (
    <Card>
      <MainHeading />
      <InputForm dataPostHandler={props.dataPostHandler} />
    </Card>
  );
};

export default ToDoinput;
