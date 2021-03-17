import React, { Component } from 'react';
import { connect } from "react-redux";
import { contactsOperations } from "../../redux/phoneBook/index";
import shortid from 'shortid';
import styles from './InputForm.module.css';
import { CSSTransition } from "react-transition-group";
import "../../stylesheets/animation.css";
import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };
 
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { login } = this.state;

    if (login === '') {toast.error('Login is empty');
    } else { 
      if (this.props.contacts.items.find(({ login }) => login === this.state.login)) {
        toast.error('Login is already exist');
      } else {
        this.props.onSubmit(this.state);
      };
      this.reset();
    };
  };
    
  reset = () => {
    this.setState({ login: '', email: '' });
  };

  render() {
    return (
      <>
      <form className={styles.box} onSubmit={this.handleSubmit} >
        <label htmlFor={this.loginInputId} className={styles.login}>
          Login
          <input
            type='text'
            name='login'
            id={this.nameInputId}
            value={this.state.login}
            onChange={this.handleChange}
            className={styles.input}
            placeholder='Enter login' />
        </label>
        <label htmlFor={this.emailInputId} className={styles.email}>
          E-mail
          <input
            type='text'
            name='email'
            id={this.emailInputId}
            value={this.state.email}
            onChange={this.handleChange}
            className={styles.input}
            placeholder='Enter e-mail' />
          </label>
            <button type='submit' className={styles.button}>
              Submit
            </button>
        </form>
        </>
    );
  }
};

const mapStateToProps = state => ({ contacts: state.contacts });

const mapDispatchToProps = dispatch => ({
  onSubmit: (login, email) => { dispatch(contactsOperations.addContact(login, email)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);