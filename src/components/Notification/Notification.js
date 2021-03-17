import React, { Component } from "react";
import { connect } from 'react-redux';
import { contactsSelectors, contactsActions } from '../../redux/phoneBook';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Notification extends Component {
   
    componentDidMount() {
        if (this.props.error) {
            toast.error(`${this.props.error}`);
            setTimeout(() => {
                this.props.clearError();
            }, 2500);
        }
    };

    render() {
        return (
             <></>
        );
    };
};

const mapStateToProps = (state) => ({
    error: contactsSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
    clearError: () => dispatch(contactsActions.clearContactError())
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);