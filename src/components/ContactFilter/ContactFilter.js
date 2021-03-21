import React, {useCallback} from 'react';
import styles from './ContactFilter.module.css';
import { useDispatch, useSelector } from "react-redux";
import { contactsSelectors, contactsActions } from "../../redux/phoneBook";

/**const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state)
})

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});
 */

export default function ContactFilter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  
  const onChange = useCallback( e => dispatch(contactsActions.changeFilter(e.target.value)), [dispatch]);

  return(
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
  )
};