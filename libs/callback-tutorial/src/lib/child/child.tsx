import styles from './child.module.scss';
import {useEffect} from 'react';

/* eslint-disable-next-line */
export interface ChildProps {
  returnComment: () => string
}

export function Child({returnComment}: ChildProps) {

  useEffect(() => console.log('Function was called'), [returnComment]);

  return (
    <div>{returnComment()}</div>
  );
}

export default Child;
