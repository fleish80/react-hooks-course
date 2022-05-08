import React, {useRef, useState} from 'react';
import styles from './imperative-handle-tutorial.module.scss';
import ImperativeHandleButton, {RefObject} from './imperative-handle-button/imperative-handle-button';

/* eslint-disable-next-line */
export interface ImperativeHandleTutorialProps {
}

export const ImperativeHandleTutorial = (props: ImperativeHandleTutorialProps) => {
  const buttonRef = useRef<RefObject>(null);
  return (
    <React.Fragment>
      <h1>Use Imperative Handle</h1>
      <button onClick={() => {
        if (buttonRef.current) {
          buttonRef.current.changeToggle();
        }
      }}>Button From Parent</button>
      <ImperativeHandleButton ref={buttonRef}/>
    </React.Fragment>
  );
}

export default ImperativeHandleTutorial;
