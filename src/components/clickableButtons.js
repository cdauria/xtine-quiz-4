// components/ClickableButtons.js

import React, { useState } from 'react';
import styles from './clickableButtons.module.css'

const ClickableButtons = ({ question, handleUserResponse, selected }) => {
  const handleButtonClick = () => {
    handleUserResponse(question, selected ? null : question);
  }

  return (
    <div
      className={`${styles.clickableButtons} ${selected ? styles.selected : ''}`}
      onClick={handleButtonClick}
    >
      {question}
    </div>
  );
};

export default ClickableButtons;




/* const ClickableButtons = ({ question, handleUserResponse, selected }) => {
  const [userResponse, setUserResponse] = useState(null);

  const handleButtonClick = () => {
    handleUserResponse(question);
  };

  return (
    <div
      className={`${styles.clickableButtons} ${selected ? styles.selected : ''}`}
      onClick={handleButtonClick}
    >
      {question}
    </div>
  );
};

export default ClickableButtons; */



/* const ClickableButtons = ({ question, handleUserResponse, selected }) => {
  const [userResponse, setUserResponse] = useState(null);

  const handleButtonClick = (response) => {
    if (userResponse === response) {
      setUserResponse(null);
      handleUserResponse(null);
    } else {
    setUserResponse(response);
    handleUserResponse(response);
  };
}

  return (
    <div
      className={`${styles.clickableButtons} ${userResponse === question ? styles.selected : ''}`}
      onClick={() => handleButtonClick(question)}
    >
      {question}
    </div>
  );
};

export default ClickableButtons; */



/* import styles from '../components/clickableButtons.module.css';

const ClickableButtons = (props) => {
  return (
    <div className={styles.clickableButtons}>{props.children}</div>
  )
} 

export default ClickableButtons */


/* const ClickableButtons = ({ children }) => {
    return <button className={styles.clickableButtons}>{children}</button>;
  };

export default ClickableButtons */

/* const ClickableButtons = (props) => {
  return (
    <button className={styles.clickableButtons}>
      {props.children}
    </button>
  );
};

export default ClickableButtons; */