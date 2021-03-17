import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations }  from '../../redux/auth';
import styles from "./Register.module.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Register extends Component {
    state = {
    name: '',
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
        const { name, email, password } = this.state;
        if (name === '') {toast.error('Name is empty');}
        if (email === '') { toast.error('Email is empty'); }
        if (password.length < 7) { toast.error('Wrong password'); }
        else {
            this.props.onRegister(this.state);
        };
        this.reset();
    };
    
  reset = () => {
    this.setState({ name: '', email: '', password: ''  });
  };
        
    render() {
            return (
                <>
                    <h1>Registration</h1>
                    <form className={styles.box} onSubmit={this.handleSubmit} autoComplete='off' >
                        <label htmlFor={this.nameInputId} className={styles.name}>
                            Name
                        <input
                                type='text'
                                name='name'
                                id={this.nameInputId}
                                value={this.state.name}
                                onChange={this.handleChange}
                                className={styles.input}
                                placeholder='Enter name'
                            />
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
                            Register
                    </button>
                    </form>
                </>
            )
        };
    };

const mapDispatchToProps = {
    onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(Register);