import React from 'react';
import styles from './ContactFilter.module.css';
import { connect } from "react-redux";
import { contactsSelectors, contactsActions } from "../../redux/phoneBook";

const ContactFilter = ({ value, onChange }) => (
          <label
            className={styles.label}>
          <input
                type='text'
                value={value}
                onChange={onChange}
                name='filter'
                className={styles.input}
                placeholder='Enter contact name'
            />
        </label>
);

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state)
})

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);