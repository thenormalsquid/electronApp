/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import AppContainer from 'containers/AppContainer';
import HomeContainer from 'containers/HomeContainer';

export default () => (
  <AppContainer>
    <Switch>
      <Route path="/" component={HomeContainer} />
    </Switch>
  </AppContainer>
);
