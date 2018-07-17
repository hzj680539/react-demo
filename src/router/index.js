import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import login from "../pages/login/login";
import douban from '../pages/douban/douban';
import client from '../pages/client/client';

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' exact component={login} />
          <Route path='/douban' component={douban} />
          <Route path='/client' component={client} />
          <Redirect to='/' />
        </Switch>
      </HashRouter>
    )
  }
}
