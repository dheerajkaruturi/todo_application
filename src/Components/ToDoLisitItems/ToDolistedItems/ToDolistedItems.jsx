import React, { Fragment, useState } from "react";
import ListedItemsWrapper from "../../Card/ListedItemsWrapper";
import styles from "./todolisteditems.module.css";

const ToDolistedItems = (props) => {
  const [checked, setChecked] = useState(false);

  const inputCheckHandler = function () {
    setChecked(true);
  };

  return (
    <Fragment>
      <ListedItemsWrapper>
        <li className={styles.itemInList}>
          <input
            type="checkbox"
            className={styles.inputCheckBox}
            onChange={inputCheckHandler}
            value={checked}
          />
          {checked ? (
            <p className={styles.taskDescription_completedTask}>
              {props.description}
            </p>
          ) : (
            <p className={styles.taskDescription}>{props.description}</p>
          )}
          {checked ? (
            <button
              className={styles.doneButton}
              onClick={() => props.taskDelete(props.id)}
            >
              Done
            </button>
          ) : (
            <button
              className={styles.deleteButton}
              onClick={() => props.taskDelete(props.id)}
            >
              Delete
            </button>
          )}
        </li>
        <p className={styles.createdOn}>Created On : {props.date}</p>
      </ListedItemsWrapper>
    </Fragment>
  );
};

export default ToDolistedItems;
