import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authActions } from '../../redux/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*componentDidMount() {
        if (this.props.error) {
            toast.error(`${this.props.error}`);
            setTimeout(() => {
                this.props.clearError();
            }, 2500);
        };
    };
  
  const mapStateToProps = (state) => ({
    error: authSelectors.getAuthError(state),
});

const mapDispatchToProps = dispatch => ({
    clearError: () => dispatch(authActions.clearAuthError())
});*/
export default function AuthNotification() {
    const dispatch = useDispatch();
    const error = useSelector(authSelectors.getAuthError);
    const clearError = useCallback(()=> dispatch(authActions.clearAuthError()),[dispatch]);

    useEffect(() => {
         if (error) {
            toast.error(`${error}`);
            setTimeout(() => {
                clearError();
            }, 2500);
        };
     }, [error, clearError]);
    
        return (
            <>
          </>
        );
    };