import React, { Fragment } from "react";
import Card from "../../Card/Card";
import styles from "./todolisteditems.module.css";

const ToDolistedItems = () => {
  return (
    <Fragment>
      <p className={styles.counter}>Total Tasks: 10</p>
      <Card>
        <li className={styles.itemInList}>
          <input type="checkbox" className={styles.inputCheckBox} />
          <p className={styles.taskDescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
            blanditiis.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <button className={styles.deleteButton}>X</button>
        </li>
        <p className={styles.createdOn}>Created On : 02-02-2020</p>
      </Card>
    </Fragment>
  );
};

export default ToDolistedItems;
