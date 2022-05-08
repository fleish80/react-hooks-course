import styles from './imperative-handle-button.module.scss';
import {forwardRef, Ref, useImperativeHandle, useState} from 'react';
import React from 'react';

/* eslint-disable-next-line */
export interface ImperativeHandleButtonProps {
}

/* eslint-disable-next-line */
export interface RefObject {
  changeToggle: () => void
}

export const ImperativeHandleButton = forwardRef((props: ImperativeHandleButtonProps, ref: Ref<RefObject>) => {

  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    changeToggle() {
      setToggle(!toggle)
    }
  }));

  return (
    <React.Fragment>
      <button onClick={() => {
        setToggle(!toggle);
      }}>Button From Child
      </button>
      {toggle && <span>Toggle</span>}
    </React.Fragment>
  );
});

export default ImperativeHandleButton;
