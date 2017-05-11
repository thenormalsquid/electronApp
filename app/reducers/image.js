// @flow
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'actions/image';

export type imageStateType = {
  width: number,
  height: number
};

type actionType = {
  type: string
};

const initialState = {
  width: 800,
  height: 600
};

export default function image(state: imageStateType = initialState, action: actionType) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
