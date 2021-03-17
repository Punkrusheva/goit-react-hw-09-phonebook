import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import routes from "../../routes";
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';


const Navigation = ({ isAuthenticated }) => (
  <ul className={styles.navMenu}>
    <li className={styles.headerMenuItem}>
      <NavLink exact to={routes.homePage}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}>Home</NavLink>
      </li>
    { isAuthenticated && <li className={styles.headerMenuItem}>
      <NavLink to={routes.phoneBook}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}>Contacts</NavLink>
    </li>}
    </ul>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);