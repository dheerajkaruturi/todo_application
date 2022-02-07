import { Fragment } from "react";
import styles from "./todolist.module.css";
import ToDolistedItems from "./ToDolistedItems/ToDolistedItems";

const ToDolist = (props) => {
  return (
    <Fragment>
      <div className={styles["list-container"]}>
        <ul className={styles.listItems}>
          {props.listData.map((data) => {
            return (
              <ToDolistedItems
                key={data.id}
                id={data.id}
                description={data.description}
                date={data.date}
              />
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default ToDolist;
