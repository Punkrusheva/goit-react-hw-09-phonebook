import React, { Component } from "react";
import { connect } from 'react-redux';
import { authSelectors, authActions } from '../../redux/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AuthNotification extends Component {
   
    componentDidMount() {
        if (this.props.error) {
            toast.error(`${this.props.error}`);
            setTimeout(() => {
                this.props.clearError();
            }, 2500);
        };
    };

    render() {

        return (
            <>
          </>
        );
    };
};

const mapStateToProps = (state) => ({
    error: authSelectors.getAuthError(state),
});

const mapDispatchToProps = dispatch => ({
    clearError: () => dispatch(authActions.clearAuthError())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthNotification);