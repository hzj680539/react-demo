import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import login from "@/pages/login/login";
import book from '@/pages/douban/book';
import movie from '@/pages/douban/movie';
import music from '@/pages/douban/music';
import client from '@/pages/client/client';

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' exact component={login} />
          <Route path='/douban/book' component={book} />
          <Route path='/douban/movie' component={movie} />
          <Route path='/douban/music' component={music} />
          <Route path='/client' component={client} />
          <Redirect to='/' />
        </Switch>
      </HashRouter>
    )
  }
}
