import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { authActions } from "../auth";

const initialUserState = { name: null, email: null};

const user = createReducer(initialUserState, {
    [authActions.registerSuccess]: (_, { payload }) => payload.user,
    [authActions.loginSuccess]: (_, { payload }) => payload.user,
    [authActions.logoutSuccess]: () => initialUserState,
    [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
    [authActions.registerSuccess]: (_, { payload }) => payload.token,
    [authActions.loginSuccess]: (_, { payload }) => payload.token,
    [authActions.logoutSuccess]: () => null,
});

const loading = createReducer(false, {
    [authActions.registerRequest]: () => true,
    [authActions.registerSuccess]: () => false,
    [authActions.registerError]: () => false,

    [authActions.loginRequest]: () => true,
    [authActions.loginSuccess]: () => false,
    [authActions.loginError]: () => false,
    
    [authActions.logoutRequest]: () => true,
    [authActions.logoutSuccess]: () => false,
    [authActions.logoutError]: () => false,
    
    [authActions.getCurrentUserRequest]: () => true,
    [authActions.getCurrentUserSuccess]: () => false,
    [authActions.getCurrentUserError]: () => false,
});

const error = createReducer(null, {
    [authActions.registerError]: () => 'Ошибка регистрации!',
    [authActions.loginError]: () => 'Ошибка входа!',
    [authActions.logoutError]: () => 'Ошибка выхода!',
    [authActions.getCurrentUserError]: () => 'Ошибка получения текущего пользователя!',
    [authActions.clearAuthError]: () => null,
});
/*const setError = (_, { payload }) => payload;

const error = createReducer(null, {
    [authActions.registerError]: setError,
    [authActions.loginError]: setError,
    [authActions.logoutError]: setError,
    [authActions.getCurrentUserError]: setError
});*/

export default combineReducers({
    user,
    token,
    error,
    loading,
});