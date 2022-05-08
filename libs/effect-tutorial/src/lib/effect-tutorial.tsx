import styles from './effect-tutorial.module.scss';
import {useEffect, useState} from 'react';
import axios from 'axios';
import React from 'react'


/* eslint-disable-next-line */
export interface EffectTutorialProps {
}

export const EffectTutorial = (props: EffectTutorialProps) => {

  const [data, setData] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
      setData(res.data[count].email)
    })();
  }, [count])

  return (
    <React.Fragment>
      <h1>Use Effect</h1>
      <div>Email: {data}</div>
      <div>{count}</div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increment</button>
    </React.Fragment>
  );
}

export default EffectTutorial;
