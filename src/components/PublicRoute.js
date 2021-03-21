import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
 * - В противном случае рендерит компонент
 * 
 * const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
*/
export default function PublicRoute({
  redirectTo,
  children,
  ...routeProps
}) {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? (
          <Redirect to={redirectTo} />
    ) : (
      children)
    }</Route>
  );
};