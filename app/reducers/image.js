// @flow
import typeToReducer from 'type-to-reducer';
import { 
  UPLOAD_IMAGE
} from 'actions/constants';

export type imageStateType = {
  width: number,
  height: number,
  error: ?string,
  imageObj: ?HTMLImageElement
};

type actionType = {
  type: string
};

const initialState = {
  width: 800,
  height: 600,
  imageObj: null,
  error: null
};

const uploadImageReducer = (isReject?: boolean) => 
  (state: imageStateType, action: actionType) => {
    if(isReject) {
      return { ...state, error: action.payload };
    }
    const { payload } = action;
    return { ...state, imageObj: payload.image, width: payload.width, height: payload.height  } ;
};

const image = typeToReducer({
  [UPLOAD_IMAGE]: {
    REJECTED: uploadImageReducer(true),
    FULFILLED: uploadImageReducer()
  }
}, initialState);

export default image;