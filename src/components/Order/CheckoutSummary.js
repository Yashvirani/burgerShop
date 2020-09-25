import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import classes from './CheckoutSummary';

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
       <h1 style={{margin:'auto',textAlign:'center',marginBottom:'10px'}}>We hope it tastes well!!</h1>
       <div style={{width:'300px',height:'300px', margin:'auto'}}>
       <Burger ingredients={props.ingredients}/>
       <Button btnType='Danger' style={{align:'center'}}  clicked={props.checkoutCancelled}>Cancel</Button>
       <Button btnType='Success' clicked={props.checkoutContinued}>Continue</Button>
       </div>
    </div>
  );

}

export default checkoutSummary;
