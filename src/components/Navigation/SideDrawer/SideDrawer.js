import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxillary from '../../../hoc/Auxillary/Auxillary';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer,classes.Close];
  if(props.open){
    attachedClasses=[classes.SideDrawer,classes.Open];
  }


  return(
    <Auxillary>
    <Backdrop show={props.open} clicked={props.closed}></Backdrop>
    <div className={attachedClasses.join(' ')} onClick={props.closed}>
    <Logo height="11%" marginbottom="32px"></Logo>
    <nav>
       <NavigationItems isAuthenticated={props.isAuth}></NavigationItems>
    </nav>
    </div>
    </Auxillary>
  );
};

export default sideDrawer;
