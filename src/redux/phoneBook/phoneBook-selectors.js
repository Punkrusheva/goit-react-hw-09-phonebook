import { createSelector } from "@reduxjs/toolkit";

const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.items;
 
const getVisibleContacts = createSelector([getAllContacts, getFilter,], (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
  
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
 });

const getError = state => state.contacts.error;

export default {
  getLoading,
  getFilter,
  getVisibleContacts,
  getError
};