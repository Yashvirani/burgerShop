import React from 'react';
import classes from './Modal.css';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Auxillary>
  <Backdrop show={props.show} clicked={props.modalCLosed}></Backdrop>
  <div className={classes.Modal}
  style={{
    transform: props.show ? 'translate(0)' : 'translate(-100vh)',
    opacity: props.show ? '1':'0'
  }}>
  {props.children}
  </div>
  </Auxillary>
)

export default React.memo(
  modal,
  (prevProps,nextProps) =>
  nextProps.show !== prevProps.show &&
  nextProps.children !== prevProps.children
);
