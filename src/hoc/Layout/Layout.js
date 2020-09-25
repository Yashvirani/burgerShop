import React , { useState } from 'react';
import { connect } from 'react-redux';
import Auxillary from '../Auxillary/Auxillary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = (props) => {
  const [sideDrawerIsVisible,setSideDrawerIsVisible] = useState(false);

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

    return(
      <Auxillary>
      <Toolbar
      drawerToggleClicked={sideDrawerToggleHandler}
      isAuth={props.isAuthenticated}>
      </Toolbar>
      <SideDrawer
      open={sideDrawerIsVisible}
      closed={sideDrawerClosedHandler}
      isAuth={props.isAuthenticated}>
      </SideDrawer>
      <main className={classes.Content}>
          {props.children}
      </main>
      </Auxillary>
    );

}

const mapStatetoProps = (state) => {
  return {
    isAuthenticated:state.auth.token!==null
  };
};

export default connect(mapStatetoProps)(layout);
