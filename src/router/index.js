import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import custom from "../pages/custom/custom";
import list from '../pages/list/list';

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' exact component={custom} />
          <Route path='/list' component={list} />
        </Switch>
      </HashRouter>
    )
  }
}
