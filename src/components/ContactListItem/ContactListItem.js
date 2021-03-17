import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';
import { AiOutlineClose } from 'react-icons/ai';

function ContactListItem({ name, id, number, onClick}) {
  return (<>
          <li key={id} className={styles.item}>
            <p className={styles.name}>{name}</p>
            <p className={styles.number}>{number}</p>
            
            <button
              type='button'
              onClick={onClick}
              className={styles.button}>
              <AiOutlineClose fill="white" />
        </button>
          </li>
        
    </>
  );
};    

ContactListItem.defaultProps = {
  number: '',
  name: '',
  id: null,
};

ContactListItem.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
    id: PropTypes.string.isRequired
};

export default ContactListItem;