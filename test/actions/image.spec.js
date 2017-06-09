import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { spy, stub } from 'sinon';

import * as testImages from '../base64data' ;
import * as actions from 'actions/image';
import * as types from 'actions/constants';
import eslint from 'eslint.png';

const middlewares = [thunk, promiseMiddleware()];
const mockStore = configureMockStore(middlewares);
const asyncTypes = {
    uploadPending: `${types.UPLOAD_IMAGE}_PENDING`,
    uploadFulfilled: `${types.UPLOAD_IMAGE}_FULFILLED`,
    uploadErr: `${types.UPLOAD_IMAGE}_REJECTED`
}

describe('image actions', () => {

  it('uploadImage should create image from successful image path', () => {
    const filename = '/foo.png';
    const image = new Image();    
    image.src = filename;

    const expectedActions = [
      { type: asyncTypes.uploadPending },
      {
        type: asyncTypes.uploadFulfilled,
        payload: { image, width: 0, height: 0}
      }
    ];

    const store = mockStore({});
    return store.dispatch(actions.uploadImage(filename)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()[1].payload.image.src).toBe("/foo.png");
    });
  });

  it('uploadImage should error when bad data is passed', () => {
    const expectedActions = [
        {
            type: asyncTypes.uploadPending
        },
        {
            type: asyncTypes.uploadErr,
            payload: actions.FAILEDUPLOADMSG,
            "error": true
        }
    ];

    const store = mockStore({});

    store.dispatch(actions.uploadImage(undefined)).catch(e => {
        expect(store.getActions()).toEqual(expectedActions);
    });
  });
});