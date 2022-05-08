import styles from './ref-tutorial.module.scss';
import React, {useRef} from 'react';

/* eslint-disable-next-line */
export interface RefTutorialProps {
}

export const RefTutorial = (props: RefTutorialProps) => {

  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value);
      inputRef.current.focus();
    }
  }

  return (
    <React.Fragment>
      <h1>Use Ref</h1>
      <input type="text" ref={inputRef}/>
      <button onClick={onClick}>Change Name</button>
    </React.Fragment>
  );
}

export default RefTutorial;
