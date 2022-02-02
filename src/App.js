import { Fragment } from "react";
import styles from './app.module.css';
import ToDoinput from "./Components/TodoInput/ToDoinput";
import ToDolist from "./Components/ToDoLisitItems/ToDolist";

const App = function () {
  return (
    <Fragment>
      <div className={styles.inputForm_container}>
        <ToDoinput />
      </div>
      <div className={styles.inputList_container}>
        <ToDolist />
      </div>
    </Fragment>
  );
};

export default App;
