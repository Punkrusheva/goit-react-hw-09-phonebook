import React, { useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from "./UserMenu.module.css";
import Button from 'react-bootstrap/Button';
import { FiLogOut } from 'react-icons/fi';
/***
const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};
 */
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const onLogOut = useCallback(() =>{ 
    dispatch(authOperations.logOut());
}, [dispatch]);
  
  return (
    <div className={styles.container}>
      <span className={styles.name}>Welcome, {name}</span>
      <Button className={styles.button} variant="outline-secondary" onClick={onLogOut}>
        <FiLogOut className={styles.svg} fill="white" /></Button>{''}
    </div>
  );
};