// @flow
import typeToReducer from 'type-to-reducer';
import { 
  APPLY_FILTER
} from 'actions/constants';

// some filters needs more than one image (sticker, compare) so requiredImages keeps track of this
export type filterStateType = {
    list: Array<{ name: string, path: string, requiredImages: number }>;
    selectedFilter: ?number;
    isPending: boolean;
};

type actionType = {
  type: string
};

const initialState = {
  list: [
      { name: 'Scatter', path: '/scatter', requiredImages: 1 },
      { name:'Edge Detection', path: '/edge-detection', requiredImages: 1 },
      { name: 'Sticker', path: '/sticker', requiredImages: 2 },
      { name: 'Image Compare', path: '/compare', requiredImages: 2 }
  ],
  selectedFilter: null,
  isPending: false,
  requiredImages: 0
};

const filters = typeToReducer({
  [APPLY_FILTER]: {
    PENDING: () => {
    },
    FULFILLED: (state: filterStateType, action: actionType) => {
        const {  payload: { selectedFilter, requiredImages } } = action;
        return { ...state, selectedFilter, requiredImages, isPending: false };
    }
  }
}, initialState);

export default filters;