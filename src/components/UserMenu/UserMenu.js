import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from "./UserMenu.module.css";
import Button from 'react-bootstrap/Button';
import { FiLogOut } from 'react-icons/fi';

const UserMenu = ({ name, onLogout }) => (
  <div className={styles.container}>
    <span className={styles.name}>Welcome, {name}</span>
    <Button className={styles.button} variant="outline-secondary" onClick={onLogout}>
      <FiLogOut className={styles.svg} fill="white" /></Button>{''}
    </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);