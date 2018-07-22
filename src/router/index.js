import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import login from "@/pages/login/login";
import book from '@/pages/douban/book';
import movie from '@/pages/douban/movie';
import movieDetail from '@/pages/douban/movieDetail';
import music from '@/pages/douban/music';
import client from '@/pages/client/client';

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' exact component={login} />
          <Route path='/douban/book/list' component={book} />
          <Route path='/douban/movie/list' component={movie} />
          <Route path='/douban/movie/detail/:id' component={movieDetail} />
          <Route path='/douban/music/list' component={music} />
          <Route path='/client' component={client} />
          <Redirect to='/' />
        </Switch>
      </HashRouter>
    )
  }
}
