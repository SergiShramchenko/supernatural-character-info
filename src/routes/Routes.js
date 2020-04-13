import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import Information from '../pages/information';
import AboutProject from '../pages/about-project';

export default () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/information' component={Information} />
    <Route exact path='/about-project' component={AboutProject} />
  </Switch>
);
