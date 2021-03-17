import React, { Component } from 'react';
import Layout from '../../components/ContactsLayout/ContactsLayout';
import { connect } from "react-redux";
import ContactList from '../../components/ContactList/ContactList'
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactFilter from '../../components/ContactFilter/ContactFilter';
import "../../stylesheets/animation.css";
import Load from "../../components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import { contactsOperations } from "../../redux/phoneBook";

class Phonebook extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Layout >
        <ContactForm/>
        <ContactFilter />
        
        <ToastContainer autoClose={2500} />     
        <ContactList />
      </Layout>
    );
  };
};


const mapDispatchToProps = dispatch => ({
fetchContacts: () => dispatch(contactsOperations.fetchContacts())
})

export default connect( null, mapDispatchToProps )(Phonebook);