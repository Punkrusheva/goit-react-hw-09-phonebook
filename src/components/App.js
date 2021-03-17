import React, { Component, Suspense, lazy } from "react";
import Layout from "./Layout/Layout";
import { Switch, Redirect } from "react-router-dom";
import routes from "../routes";
import Load from "./Loader/Loader";
import { authOperations, authSelectors} from "../redux/auth";
import { connect } from 'react-redux';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { ToastContainer } from "react-toastify";
import { contactsSelectors } from "../redux/phoneBook";
import Notification from '../components/Notification/Notification';
import AuthNotification from '../components/AuthNotification/AuthNotification';

const HomePage = lazy(() => import('../views/HomeView/HomePage.js' /*webpackChunkName: 'home-page' */));
const PhoneBook = lazy(() => import('../views/PhoneBookView/PhoneBook.js' /*webpackChunkName: 'phone-book' */));
const Register = lazy(() => import('../views/RegisterView/Register.js' /*webpackChunkName: 'register' */));
const Login = lazy(() => import('../views/LoginView/Login.js' /*webpackChunkName: 'Login' */));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  };
  
  render() {
    const { isLoadingAuth, isLoadingContacts, errorContacts, errorAuth} = this.props;
    return (
      <Layout>
        <ToastContainer autoClose={2500} />
        <Suspense fallback={<Load
                        type="ThreeDots"
                        color="#3f51b5"
                        height={45}
                        width={45}
                        timeout={6000}
                    />}>
          <Switch>
            <PublicRoute exact path={routes.homePage} component={HomePage} />
            <PrivateRoute
              path={routes.phoneBook}
              component={PhoneBook}
              redirectTo={routes.homePage}/>
            <PublicRoute
              path={routes.register}
              restricted
              redirectTo={routes.phoneBook}
              component={Register} />
            <PublicRoute
              path={routes.login}
              restricted
              redirectTo={routes.phoneBook}
              component={Login} />
            <Redirect to={routes.homePage}/>
          </Switch>
        </Suspense>
        {(isLoadingContacts || isLoadingAuth) && <Load />}
        {errorContacts && <Notification  message={`${errorContacts.message}`} />}
        {errorAuth &&  <AuthNotification/>}
        </Layout>
    )
  }
};

const mapStateToProps = state => ({
  isLoadingAuth: authSelectors.getAuthLoading(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
  errorContacts: contactsSelectors.getError(state),
  errorAuth: authSelectors.getAuthError(state),
});

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);