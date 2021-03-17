import React, { Component } from 'react';
import Layout from '../../components/ContactsLayout/ContactsLayout';
import styles from './HomePage.module.css';
import "../../stylesheets/animation.css";

class HomePage extends Component {

  render() {
    return (
      <Layout >
        <h1 className={styles.title}>HELLO MY FRIEND!</h1>
        <img alt='' src='https://live.staticflickr.com/8275/8747052371_ec07f1c6f7_c.jpg' />
      </Layout>
    );
  };
};

export default HomePage;