import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import shortid from 'shortid';
import styles from "./Register.module.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*const mapDispatchToProps = {
    onRegister: authOperations.register,
};*/

export default function Register() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
          
    const nameInputId = shortid.generate();
    const emailInputId = shortid.generate();
    const passwordInputId = shortid.generate();

    //const onRegister = ()=> dispatch(authOperations.register());
           
    const handleChange = e => {
    const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;

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

        if (name === '') { toast.error('Укажите имя'); }
        if (email === '') { toast.error('Укажите имейл'); }
        if (password.length < 7) { toast.error('Проверьте пароль, не меньше 7 символов'); }
        else {
            dispatch(authOperations.register({ name, email, password }));
            };
         reset();
    };
    
    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
  };

    return (
        <>
                    <h1>Registration</h1>
            <form className={styles.box}
                onSubmit={handleSubmit} 
                autoComplete='off' >
                        <label htmlFor={nameInputId} className={styles.name}>
                            Name
                        <input
                                type='text'
                                name='name'
                                id={nameInputId}
                                value={name}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder='Enter name'
                            />
                        </label>
                        <label htmlFor={emailInputId} className={styles.email}>
                            E-mail
                        <input
                                type='text'
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
                            Register
                    </button>
                    </form>
                </>
    )
};
/**class Register extends Component {
    state = {
    name: '',
    email: '',
    password: '',
    };
    
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

    handleSubmit = e => {
        e.preventDefault();
        const { name, email, password } = this.state;
        if (name === '') {
            toast.error('Name is empty');
        } else {
            if (email === '') { toast.error('Email is empty'); }
            else {
                if (password.length < 7) { toast.error('Wrong password'); }
                else {
                        this.props.onRegister(this.state);
                        this.setState({ name: '', email: '', password: '' });
                    };
                };
        };
        
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
                    {this.props.isLoadingAuth &&
                        <Load
                            type="ThreeDots"
                            color="#3f51b5"
                            height={45}
                            width={45}
                            timeout={6000}
                        />}
                    {this.props.errorReg &&  <AuthNotification/>}
                </>
            )
        };
    };

const mapStateToProps = state => ({
    isLoadingAuth: authSelectors.getAuthLoading(state),
    errorReg: authSelectors.getAuthError(state),
});

const mapDispatchToProps = {
    onRegister: authOperations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register); */