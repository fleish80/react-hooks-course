import styles from './reducer-tutorial.module.scss';
import React, {useReducer} from 'react';

/* eslint-disable-next-line */
export interface ReducerTutorialProps {}

interface State {
  count: number,
  showText: boolean
}

const reducer = (state: State, action: any): State => {
  switch (action.type) {
    case 'INCREMENT': return {...state, count: state.count + 1}
    case 'TOGGLE_SHOW_TEXT': return {...state, showText: !state.showText}
    default: return state
  }
}

export const ReducerTutorial = (props: ReducerTutorialProps) => {

  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});

  return (
    <React.Fragment>
      <h1>Use Reducer</h1>
      <div>{state.count}</div>
      <button onClick={() => {
        dispatch({type: 'INCREMENT'});
        dispatch({type: 'TOGGLE_SHOW_TEXT'});
      }}>Click Here</button>

      {state.showText && <p>This is a text</p>}

    </React.Fragment>
  );
}

export default ReducerTutorial;
