import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import styles from "./AppBar.module.css";
import { authSelectors } from "../../redux/auth";

/*
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});*/

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  
  return (
  <header className={styles.headerMenu}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
    
  </header>
  );
};