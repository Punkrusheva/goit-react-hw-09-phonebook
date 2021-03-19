import {
    useState,
    //useEffect
} from 'react';
//import { connect } from 'react-redux';
//import { authOperations } from '../../redux/auth';
import shortid from 'shortid';
import styles from "./Login.module.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import useLocalStorage from '../../hooks/useLocalStorage';

export default function Login({ onLogin }) {
    const [email, setEmail] = useState('');// useLocalStorage('email', '');
    const [password, setPassword] = useState('');//useLocalStorage('password', '');
          
    const emailInputId = shortid.generate();
    const passwordInputId = shortid.generate();

    const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      
      case 'password':
        setPassword(value);
        break;
      
      default:
        return;
    }
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        if (email === '') { toast.error('Email is empty'); }
        if (password.length < 7) { toast.error('Wrong password'); }
        else {
            console.log(email, password);
                //onLogin(email, password);
        };
        reset();
    };
    
    const reset = () => {
        setEmail('');
        setPassword('');
  };

    return (
        <>
            <h1>Login</h1>
            <form className={styles.box}
            onSubmit={handleSubmit} 
            >
                    <label htmlFor={emailInputId} className={styles.email}>
                        E-mail
                        <input
                            type='email'
                            name='email'
                            id={emailInputId}
                            value={email}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder='Enter e-mail'
                        />
                    </label>
                    <label htmlFor={passwordInputId} className={styles.password}>
                        Password
                        <input
                            type='password'
                            name='password'
                            id={passwordInputId}
                            value={password}
                            onChange={handleChange}
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

/*class OldLogin extends Component {
    state = {
    email: '',
    password: '',
    };
      
    emailInputId = shortid.generate();
    passwordInputId = shortid.generate();

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

//export default connect(null, mapDispatchToProps)(Login);*/