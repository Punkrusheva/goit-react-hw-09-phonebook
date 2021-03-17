import { useState } from 'react';
//import { connect } from "react-redux";
//import { contactsOperations } from "../../redux/phoneBook/index";
import shortid from 'shortid';
import styles from './ContactForm.module.css';
import { CSSTransition } from "react-transition-group";
import "../../stylesheets/animation.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    }
  };

  /*const handleSubmit = e => {
    e.preventDefault();

    if (name === '') {toast.error('Contact details empty');
    } else { 
      if (this.props.contacts.items.find(({ name }) => name === this.state.name)) {
        toast.error('Contact is already exist');
      } else {
        this.props.onSubmit(this.state);
      };
      reset();
    };
  };
    
  const reset = () => {
    this.setState({ name: '', number: '' });
  };*/

return (<>
        <CSSTransition
            in={true} appear={true}
            classNames='logo'
            timeout={500}
          unmountOnExit>
          <h1 className={styles.logo}>Phonebook</h1>
            </CSSTransition>
          
       
      <form className={styles.box}  >{/*onSubmit={handleSubmit}*/}
       <label htmlFor={nameInputId} className={styles.name}>
          Name
          <input
            type='text'
            name='name'
            id={nameInputId}
            value={name}
            onChange={handleChange}
            className={styles.input}
            placeholder='Enter contact name' />
        </label> 
       <label htmlFor={numberInputId} className={styles.number}>
          Number
          <input
            type='text'
            name='number'
            id={numberInputId}
            value={number}
            onChange={handleChange}
            className={styles.input}
            placeholder='Enter contact number' />
          </label>
            <button type='submit' className={styles.button}>
              Add contact
            </button>
        </form>
        </>)
};

/*class OldContactForm extends Component {
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
    const { name } = this.state;

    if (name === '') {toast.error('Contact details empty');
    } else { 
      if (this.props.contacts.items.find(({ name }) => name === this.state.name)) {
        toast.error('Contact is already exist');
      } else {
        this.props.onSubmit(this.state);
      };
      this.reset();
    };
  };
    
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    
    return (
      <>
        <CSSTransition
            in={true} appear={true}
            classNames='logo'
            timeout={500}
          unmountOnExit>
          <h1 className={styles.logo}>Phonebook</h1>
            </CSSTransition>
          
       
      <form className={styles.box} onSubmit={this.handleSubmit} >
        <label htmlFor={this.nameInputId} className={styles.name}>
          Name
          <input
            type='text'
            name='name'
            id={this.nameInputId}
            value={this.state.name}
            onChange={this.handleChange}
            className={styles.input}
            placeholder='Enter contact name' />
        </label>
        <label htmlFor={this.numberInputId} className={styles.number}>
          Number
          <input
            type='text'
            name='number'
            id={this.numberInputId}
            value={this.state.number}
            onChange={this.handleChange}
            className={styles.input}
            placeholder='Enter contact number' />
          </label>
            <button type='submit' className={styles.button}>
              Add contact
            </button>
        </form>
        </>
    );
  }
};

const mapStateToProps = state => ({ contacts: state.contacts });

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => { dispatch(contactsOperations.addContact(name, number)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);*/