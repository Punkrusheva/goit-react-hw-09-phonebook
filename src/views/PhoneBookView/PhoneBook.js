import React, { useEffect } from 'react';
import Layout from '../../components/ContactsLayout/ContactsLayout';
import { useDispatch } from "react-redux";
import ContactList from '../../components/ContactList/ContactList'
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactFilter from '../../components/ContactFilter/ContactFilter';
import "../../stylesheets/animation.css";
import { ToastContainer } from "react-toastify";
import { contactsOperations } from "../../redux/phoneBook";

/* componentDidMount() {
    this.props.fetchContacts();
  }

const mapDispatchToProps = dispatch => ({
fetchContacts: () => dispatch(contactsOperations.fetchContacts())
})*/

export default function Phonebook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
}, [dispatch]);
   
    return (
      <Layout >
        <ContactForm/>
        <ContactFilter />
        
        <ToastContainer autoClose={2500} />     
        <ContactList />
      </Layout>
    );
  };