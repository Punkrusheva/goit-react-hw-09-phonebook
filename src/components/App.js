import React, { Suspense, lazy, useEffect } from "react";
import Layout from "./Layout/Layout";
import { Switch, Redirect } from "react-router-dom";
import routes from "../routes";
import Load from "./Loader/Loader";
import {
  authOperations,
  authSelectors
} from "../redux/auth";
import { useDispatch, useSelector } from 'react-redux';
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
/**componentDidMount() {
    this.props.onGetCurrentUser();
  };
  
const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser
} */
export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
   }, [dispatch]);
  
  const isLoadingAuth= useSelector(authSelectors.getAuthLoading);
  const isLoadingContacts= useSelector(contactsSelectors.getLoading);
  const errorContacts= useSelector(contactsSelectors.getError);
  const errorAuth= useSelector(authSelectors.getAuthError);
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
            <PublicRoute exact path={routes.homePage}>
              <HomePage />
            </PublicRoute>
          
            <PrivateRoute
              path={routes.phoneBook}
              redirectTo={routes.homePage}>
              <PhoneBook />
            </PrivateRoute>
              
              
            <PublicRoute
              path={routes.register}
              restricted
              redirectTo={routes.phoneBook}>
              <Register/>
            </PublicRoute>
            
            <PublicRoute
              path={routes.login}
              restricted
              redirectTo={routes.phoneBook}>
              <Login/>
            </PublicRoute>
            
            <Redirect to={routes.homePage}/>
          </Switch>
        </Suspense>
        {(isLoadingContacts || isLoadingAuth) && <Load />}
        {errorContacts && <Notification  message={`${errorContacts.message}`} />}
        {errorAuth &&  <AuthNotification/>}
        </Layout>
    )
};