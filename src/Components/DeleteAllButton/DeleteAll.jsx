import React, { Fragment } from 'react';
import styles from './deleteall.module.css'

const DeleteAll = (props) => {
    return (
      <Fragment>
        <button className={styles.deleteAll} onClick={props.deleteAllmethod}>
          Delete All Tasks
        </button>
      </Fragment>
    );
};

export default DeleteAll;
