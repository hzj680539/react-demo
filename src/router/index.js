import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import login from "../pages/login/login";
import list from '../pages/list/list';
// import demo from './demo';

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' exact component={login} />
          <Route path='/list' component={list} />
        </Switch>
      </HashRouter>
    )
  }
}
