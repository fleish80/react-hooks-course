import React, {useCallback, useState} from 'react';
import styles from './callback-tutorial.module.scss';
import Child from './child/child';

/* eslint-disable-next-line */
export interface CallbackTutorialProps {}

export const CallbackTutorial = (props: CallbackTutorialProps) => {

  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState('Please, sub to channel');

  const returnComment = useCallback(() => data, [data]);

  return (
    <React.Fragment>
      <h1>Use callback</h1>
      <Child returnComment={returnComment} />
      {toggle && <div>Toggle Text</div>}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </React.Fragment>
  );
}

export default CallbackTutorial;
