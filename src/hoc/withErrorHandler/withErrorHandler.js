import React, { useState,useEffect } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxillary from '../Auxillary/Auxillary';
//import axios from 'axios';

const withErrorHandler = (WrappedComponent,axios) => {
  return props => {
    const [error,setError] = useState(null);

    const errorConfirmedHandler = () => {
      setError(null);

    }


      const reqInterceptor = axios.interceptors.request.use( req => {
        setError(null);
        return req;
      });


      const resInterceptor = axios.interceptors.response.use(res => res,err => {
        setError(err);
      });

      useEffect(() => {
        return () => {
          axios.interceptors.request.eject(reqInterceptor);
          axios.interceptors.request.eject(resInterceptor);
        };
      },[reqInterceptor,resInterceptor]);




      return(
        <Auxillary>
        <Modal show={error} modalCLosed={errorConfirmedHandler}>{error ? error.message : null}</Modal>
        <WrappedComponent {...props}></WrappedComponent>
        </Auxillary>
      );

  }
}


export default withErrorHandler;
