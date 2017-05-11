import React from 'react';
import { mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';
import HomeContainer from 'containers/HomeContainer';
import { configureStore } from 'store/configureStore';

function setup(initialState) {
  const store = configureStore(initialState);
  const history = createBrowserHistory();
  const app = mount(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <HomeContainer />
      </ConnectedRouter>
    </Provider>
  );
  return {
    app,
    canvas: app.find('canvas')
  };
}

// Treat this like an integration test. 
// Tests behavior and results of state changes with container and children

describe('HomeContainer', () => {
  describe('HomeContainer render', () => {
    it('should display initial canvas', () => {
      const { canvas } = setup();
    });
  });
});
