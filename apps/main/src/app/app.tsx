// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import {StateTutorial} from '@react-hooks-course/state-tutorial';
import React from 'react'
import {ReducerTutorial} from '@react-hooks-course/reducer-tutorial';
import {EffectTutorial} from '@react-hooks-course/effect-tutorial';
import {RefTutorial} from '@react-hooks-course/ref-tutorial';
import {LayoutEffectTutorial} from '@react-hooks-course/layout-effect-tutorial';
import {ImperativeHandleTutorial} from '@react-hooks-course/imperative-handle-tutorial';
import {ContextTutorial} from '@react-hooks-course/context-tutorial';
import {MemoTutorial} from '@react-hooks-course/memo-tutorial';
import {CallbackTutorial} from '@react-hooks-course/callback-tutorial';

export function App() {
  return (
    <React.Fragment>
      <StateTutorial/>
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
      <LayoutEffectTutorial />
      <ImperativeHandleTutorial />
      <ContextTutorial />
      <MemoTutorial />
      <CallbackTutorial />
    </React.Fragment>
  );
}

export default App;
