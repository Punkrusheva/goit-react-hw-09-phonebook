import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsLayout.module.css';

function Layout({ children}) {
    return (
      <div className={styles.layout} >
        {children}
      </div>)
}

Layout.defaultProps = {
  title: '',
  children: '',
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};


export default Layout;