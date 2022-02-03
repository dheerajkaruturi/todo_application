import React, { Fragment } from "react";
import ListedItemsWrapper from "../../Card/ListedItemsWrapper";
import styles from "./todolisteditems.module.css";

const ToDolistedItems = (props) => {
  return (
    <Fragment>
      <ListedItemsWrapper>
        <li className={styles.itemInList}>
          <input type="checkbox" className={styles.inputCheckBox} />
          <p className={styles.taskDescription}>{props.description}</p>
          <button className={styles.deleteButton}>X</button>
        </li>
        <p className={styles.createdOn}>Created On : {props.date}</p>
      </ListedItemsWrapper>
    </Fragment>
  );
};

export default ToDolistedItems;
