// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import type { imageStateType } from 'reducers/image';
import image from 'reducers/image';

export type globalStateType = {
  image: imageStateType
};

const rootReducer = combineReducers({
  image,
  router,
});

export default rootReducer;
