import React from 'react';
import styles from '../components/Grid.module.css'

const Grid = (props) => {
  return (
    <div className={styles.Grid}>{props.children}</div> 
  );
};

export default Grid;