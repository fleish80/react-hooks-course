import styles from './state-tutorial.module.scss';
import React, {useState} from 'react';

/* eslint-disable-next-line */
export interface StateTutorialProps {
}

export const StateTutorial = (props: StateTutorialProps) => {

  const [inputValue, setInputValue] = useState('React Course');

  const changeInput = (event: any) => {
    setInputValue(event.target.value)
  };


  return (
    <React.Fragment>
      <h1>Use State</h1>
      <input placeholder="Enter something..." onChange={changeInput}/>
      {inputValue}
    </React.Fragment>
  );
}

export default StateTutorial;
