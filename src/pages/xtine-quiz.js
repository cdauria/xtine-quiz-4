import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import getAirtableData from '../../utilities/getAirtableData';
import ClickableButtons from '@/components/clickableButtons';

export default (props) => {
  const [userResponses, setUserResponses] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleUserResponse = (question, response) => {
    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [question]: response,
    }));
  };

  const calculateResults = () => {
    // Calculate quiz results based on userResponses object
    // For now, let's just return a simple result message
    return 'You are cool!';
  };

  const handleResultSubmit = () => {
    setShowResults(true);
    console.log(userResponses);
  };

  return (
    <div>
      {props.data.map((question) => (
        <div key={question.id} className={styles.questionGroup}>
          <div className={styles.clickableButtonsContainer}>
          <ClickableButtons
            question={question.One}
            handleUserResponse={(response) => handleUserResponse(question.id, response)}
            selected={userResponses[question.id] === question.One}
          />
          <ClickableButtons
            question={question.Two}
            handleUserResponse={(response) => handleUserResponse(question.id, response)}
            selected={userResponses[question.id] === question.Two}
            />
          </div>
        </div>
      ))}
      <div>
        <button onClick={handleResultSubmit}>Submit</button>
        {showResults && <div>{calculateResults()}</div>}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  console.log('getting serverside props');
  console.log(JSON.stringify(context.params, null, 4));
  const processedData = await getAirtableData();
  console.log(JSON.stringify(processedData, null, 4));
  return {
    props: {
      data: processedData,
    },
  };
}



/* export default (props) => {
    return (
      <div>
        {props.data.map((question) => (
          <div key={question.id}>
            <ClickableButtons>{question.One}</ClickableButtons> <ClickableButtons>{question.Two}</ClickableButtons>
          </div>
        ))}
      </div>
    );
  }; */

/* export default (props) => {
    return (
           <div className={styles.container}>
              <h1>personality quiz!</h1>
              <div className={styles.buttonContainer}>
              {props.data.map((question) => (
                  <div key={question.id}>
                     <ClickableButtons>{question.One}</ClickableButtons> <ClickableButtons>{question.Two}</ClickableButtons>
                  </div> 
              ))}
          </div>
       </div>
      );
  }; */

/* export default (props) => {
  return (
         <div className={styles.container}>
            <h1>personality quiz!</h1>
            <div className={styles.buttonContainer}>
            {props.data.map((question) => (
                <div key={question.id}>
                   <ClickableButtons>{question.One}</ClickableButtons>
                   <ClickableButtons>{question.Two}</ClickableButtons>
                </div> 
            ))}
        </div>
     </div>
    );
};*/