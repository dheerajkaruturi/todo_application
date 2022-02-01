import React from "react";
import styles from './card.module.css'

const Card = (props) => {
  return <div className={styles['card-container']}>{props.children}</div>;
};

export default Card;
