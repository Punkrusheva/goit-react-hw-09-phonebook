const getIsAuthenticated = state => Boolean(state.auth.token);

const getUserName = state => state.auth.user.name;

const getAuthError = state => state.auth.error;

const getAuthLoading = state => state.auth.loading;

export default {
  getIsAuthenticated,
  getUserName,
  getAuthError,
  getAuthLoading,
};