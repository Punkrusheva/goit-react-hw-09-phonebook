import axios from "axios";
import contactsActions from "./phoneBook-actions";

const fetchContacts = () => async dispatch => {
    dispatch(contactsActions.fetchContactRequest());
    
    try {
        const { data } = await axios.get('/contacts');
        dispatch(contactsActions.fetchContactSuccess(data));
    } catch (error) {
        dispatch(contactsActions.fetchContactError(error.massage));
    }
};

const addContact = ({ name, number }) => async dispatch => {
    dispatch(contactsActions.addContactRequest());

    try {
        const contact = {name, number};
        const { data } = await axios.post('/contacts', contact);
        dispatch(contactsActions.addContactSuccess(data));
    } catch (error) {
        dispatch(contactsActions.addContactError(error.massage));
    }
};

const deleteContact = contactId => async dispatch => {
    dispatch(contactsActions.deleteContactRequest());

    try {
       await axios.delete(`/contacts/${contactId}`);
        dispatch(contactsActions.deleteContactSuccess(contactId))
    }  catch (error) {
        dispatch(contactsActions.deleteContactError(error.massage));
    }
};

export default { fetchContacts, addContact, deleteContact};