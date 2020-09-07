import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import routes from './routes';

import './styles.css';

const Content = () => {
  return (
    <div id="Content">
      <div id="Breadcrumbs">
        {routes.map(({ path, name }, key) => (
          <NavLink to={path} key={key}>
            <span className="Links">{name}</span>
          </NavLink>
        ))}
      </div>
      <Switch>
        {routes.map(({ path, Component }, key) => (
          <Route key={key} path={path} render={() => (
            <div id="DemoContainer">
              <Component />
            </div>
          )} />
        ))}
      </Switch>
    </div>
  )
}

export default Content;
