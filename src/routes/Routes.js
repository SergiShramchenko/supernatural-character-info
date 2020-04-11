import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../pages/home';
import Information from '../pages/information';
import AboutProject from '../pages/about-project';

import WithSpinner from '../hocs/with-spinner';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/information' component={Information} />
    <Route exact path='/about-project' component={AboutProject} />
  </Switch>
);

const mapStateToProps = ({ ui }) => ({ ui });

export default compose(connect(mapStateToProps), WithSpinner)(Routes);
