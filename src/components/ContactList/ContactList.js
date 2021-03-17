import React from 'react';
import { connect } from "react-redux";
import contactsOperations from "../../redux/phoneBook/phoneBook-operations";
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import ContactListItem from "../ContactListItem/ContactListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../stylesheets/animation.css";
import contactsSelectors from "../../redux/phoneBook/phoneBook-selectors";

function ContactList({ contacts, onRemoveContact }) {
  return (<>
    {contacts.length > 0 &&     
    <TransitionGroup component="ul" className={styles.contactList}>
      {contacts.map(({ name, id, number }) => (
        <CSSTransition key={id} timeout={250} classNames="item">
          <ContactListItem name={name} id={id} number={number} onClick={() => onRemoveContact(id)}>
          </ContactListItem>
        </CSSTransition>
        
        ))
      }
      </TransitionGroup>
    }
    </>
  );
}
  
ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string.isRequired
  }
  ))
};

const mapStateToProps = (state) => ({
    contacts: contactsSelectors.getVisibleContacts(state)
}
);

const mapDispatchToProps = dispatch => ({
  onRemoveContact: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
