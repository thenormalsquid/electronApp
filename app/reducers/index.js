// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import image, { imageStateType } from 'reducers/image';
import filters, { filterStateType } from 'reducers/filters';

export type globalStateType = {
  image: imageStateType;
  filters: filterStateType;
};

const rootReducer = combineReducers({
  image,
  router,
  filters
});

export default rootReducer;
