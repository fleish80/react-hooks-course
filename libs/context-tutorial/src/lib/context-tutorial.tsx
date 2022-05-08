import React, {createContext, useState} from 'react';
import {AppContext} from './app.context';
import styles from './context-tutorial.module.scss';
import Login from './login/login';
import User from './user/user';

/* eslint-disable-next-line */
export interface ContextTutorialProps {
}

export const ContextTutorial = (props: ContextTutorialProps) => {

  const [userName, setUserName] = useState('');

  const context = {
    userName,
    setUserName
  };


return (
  <AppContext.Provider value={context}>
    <h1>Use Context</h1>
    <Login/>
    <User/>
  </AppContext.Provider>
);
}

export default ContextTutorial;
