import React, { Component } from 'react';
import { Route , Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from './ContactData/ContactData';
//import * as actions from '../../store/actions/index';

const checkout = props => {

    const checkoutCancelledHandler = () => {
        props.history.goBack();
    }

    const checkoutContinuedHandler = () => {
        props.history.replace( '/checkout/contact-data' );
    }


        let summary = <Redirect to="/" />
        if (props.ings){
          const purchaseRedirect = props.purchased ? <Redirect to="/" /> : null;
          summary =(
            <div>
            {purchaseRedirect}
            <CheckoutSummary
                ingredients={props.ings}
                checkoutCancelled={checkoutCancelledHandler}
                checkoutContinued={checkoutContinuedHandler} />
            <Route
                path={props.match.path + '/contact-data'}
                component={ContactData} />
            </div>
          )
        }
        return (
            <div>
                {summary}
            </div>
        );

}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased:state.order.purchased
    }
};



export default connect(mapStateToProps)(checkout);
