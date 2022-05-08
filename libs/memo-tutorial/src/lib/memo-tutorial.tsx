import styles from './memo-tutorial.module.scss';
import {useEffect, useMemo, useState} from 'react';
import axios from 'axios';

interface Comment {
  name: string;
}

/* eslint-disable-next-line */
export interface MemoTutorialProps {}

export function MemoTutorial(props: MemoTutorialProps) {

  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
      setData(res.data)
    })();
  }, []);

  const findLongestName = (comments: Comment[] | null) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      const currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div className={styles['container']}>
      <h1>Use Memo</h1>
      <div>{getLongestName}</div>
      {toggle && <div>Toggle Text</div>}
      <button onClick={() => {
        setToggle(!toggle);
      }}>Toggle</button>
    </div>
  );
}

export default MemoTutorial;
