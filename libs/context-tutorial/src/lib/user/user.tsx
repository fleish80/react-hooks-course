import styles from './user.module.scss';
import {useContext} from 'react';
import {AppContext} from '../app.context';

/* eslint-disable-next-line */
export interface UserProps {
}

export function User(props: UserProps) {

  const {userName} = useContext(AppContext);

  return (
    <span>User: {userName}</span>
  );
}

export default User;
