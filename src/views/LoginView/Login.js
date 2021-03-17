import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations }  from '../../redux/auth';
import styles from "./Login.module.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
    state = {
    email: '',
    password: '',
    };

    componentDidMount(){
      this.reset();
    };

    handleChange = ({ target: { name, value } }) => {
       this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;

        if (email === '') { toast.error('Email is empty'); }
        if (password.length < 7) { toast.error('Wrong password'); }
        else {
                this.props.onLogin(this.state);
            
        };
        this.reset();
    };
    
  reset = () => {
    this.setState({ email: '', password: ''  });
  };

    render() {
        return (
            <>
            <h1>Login</h1>
                <form className={styles.box} onSubmit={this.handleSubmit} >
                    <label htmlFor={this.emailInputId} className={styles.email}>
                        E-mail
                        <input
                            type='email'
                            name='email'
                            id={this.emailInputId}
                            value={this.state.email}
                            onChange={this.handleChange}
                            className={styles.input}
                            placeholder='Enter e-mail'
                        />
                    </label>
                    <label htmlFor={this.passwordInputId} className={styles.password}>
                        Password
                        <input
                            type='password'
                            name='password'
                            id={this.passwordInputId}
                            value={this.state.password}
                            onChange={this.handleChange}
                            className={styles.input}
                            placeholder='Enter password'
                        />
                    </label>
                    <button type='submit' className={styles.button}>
                        Sign in
                    </button>
                </form>
            </>
        )
    };
};

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(Login);