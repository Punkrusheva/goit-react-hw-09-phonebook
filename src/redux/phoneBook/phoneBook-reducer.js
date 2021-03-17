import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { contactsActions } from "../phoneBook";

const items = createReducer([], {
    [contactsActions.fetchContactSuccess]: (_, { payload }) => payload,
    [contactsActions.addContactSuccess]: (state, { payload }) => [payload, ...state],

    [contactsActions.deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload)
});

const filter = createReducer('', {
    [contactsActions.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [contactsActions.fetchContactRequest]: () => true,
    [contactsActions.fetchContactSuccess]: () => false,
    [contactsActions.fetchContactError]: () => false,

    [contactsActions.addContactRequest]: () => true,
    [contactsActions.addContactSuccess]: () => false,
    [contactsActions.addContactError]: () => false,
    
    [contactsActions.deleteContactRequest]: () => true,
    [contactsActions.deleteContactSuccess]: () => false,
    [contactsActions.deleteContactError]: () => false,
});

const error = createReducer('', {
    [contactsActions.fetchContactError]: () => 'Ошибка доcтупа к данным! Авторизируйся!',
    [contactsActions.addContactError]: () => 'Ошибка добавления контакта!',
    [contactsActions.deleteContactError]: () => 'Ошибка удаления контакта!',
    [contactsActions.clearContactError]: () => '',
});

export default combineReducers({
    items,
    filter,
    loading,
    error,
});