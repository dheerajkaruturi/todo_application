import {Fragment} from "react";
import styles from './todolist.module.css';
import ToDolistedItems from "./ToDolistedItems/ToDolistedItems";

const ToDolist = () => {
  return (
    <Fragment>
      <div className={styles["list-container"]}>
        <ul className={styles.listItems}>
          <ToDolistedItems />
        </ul>
      </div>
    </Fragment>
  );
};

export default ToDolist;
