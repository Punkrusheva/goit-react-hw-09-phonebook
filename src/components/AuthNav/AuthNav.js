import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';
import routes from "../../routes";

const AuthNav = () => (
  <ul className={styles.regMenu}>
    <li className={styles.headerMenuItem}>
      <NavLink to={routes.register}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}>Registration</NavLink>
      </li>
    <li className={styles.headerMenuItem}>
      <NavLink to={routes.login}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}>Login</NavLink>
      </li>
    </ul>
);

export default AuthNav;