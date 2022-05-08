import React, {useContext} from 'react';
import styles from './login.module.scss';
import {AppContext} from '../app.context';


/* eslint-disable-next-line */
export interface LoginProps {}

export const Login = (props: LoginProps) => {

  const {setUserName} = useContext(AppContext);

  return (
    <React.Fragment>
      <input onChange={(event) => setUserName(event.target.value)}/>
    </React.Fragment>
  );
}

export default Login;
