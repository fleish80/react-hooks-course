import React, {useEffect, useLayoutEffect, useRef} from 'react';
import styles from './layout-effect-tutorial.module.scss';

/* eslint-disable-next-line */
export interface LayoutEffectTutorialProps {
}

export function LayoutEffectTutorial(props: LayoutEffectTutorialProps) {

  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    console.log(inputRef.current?.value);
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = 'HELLO';
    }
  }, []);

  return (
    <React.Fragment>
      <h1>Use Layout Effect</h1>
      <input ref={inputRef} defaultValue="BYE BYE" type="text"/>
    </React.Fragment>
  );
}

export default LayoutEffectTutorial;
