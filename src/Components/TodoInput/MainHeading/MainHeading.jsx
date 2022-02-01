import React, { Fragment } from 'react';
import styles from './mainheading.module.css';

const MainHeading = () => {
    return (
      <Fragment>
        <div className={styles["heading-container"]}>
          <h1>Make your Day a Productive One!</h1>
        </div>
      </Fragment>
    );
};

export default MainHeading;
