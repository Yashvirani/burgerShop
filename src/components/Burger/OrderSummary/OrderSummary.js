import React  from 'react';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {


    const ingredientSummary = Object.keys(props.ingredients) // returns the array of all keys as strings
          .map( igKey => {                                   // igKey is one of the string returned by string array
            return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey} : {props.ingredients[igKey]}</span></li>;
          } );

          return (
            <Auxillary>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients. </p>
            <ul>
              {ingredientSummary}
            </ul>
            <p><strong>Order Price : {props.price.toFixed(2)} Dollars</strong></p>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
            </Auxillary>

          );


}



export default orderSummary;
