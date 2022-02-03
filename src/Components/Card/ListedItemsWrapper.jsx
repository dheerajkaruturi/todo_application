import React from 'react';
import styles from './listeditemswrapper.module.css'

const ListedItemsWrapper = (props) => {
    return <div className={styles.itemsWrapper}>{props.children}</div>;
};

export default ListedItemsWrapper;
