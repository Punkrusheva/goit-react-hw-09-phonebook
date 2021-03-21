import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsActions } from '../../redux/phoneBook';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/**
 * componentDidMount() {
        if (this.props.error) {
            toast.error(`${this.props.error}`);
            setTimeout(() => {
                this.props.clearError();
            }, 2500);
        }
    };

const mapStateToProps = (state) => ({
    error: contactsSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
    clearError: () => dispatch(contactsActions.clearContactError())
});

 connect(mapStateToProps, mapDispatchToProps)(Notification); */
export default function Notification() {
    const dispatch = useDispatch();
    const error = useSelector(contactsSelectors.getError);
    const clearError = useCallback(() => dispatch(contactsActions.clearContactError()),[dispatch]);

    useEffect(() => {
         if (error) {
            toast.error(`${error}`);
            setTimeout(() => {
                clearError();
            }, 2500);
        }
     }, [error, clearError]);

        return (
             <></>
        );
    };