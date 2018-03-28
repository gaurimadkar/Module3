import { Constants } from "../../common/Constants";

const initialState = {
  list: [],
  isOpenModal: false,
  selectedCandidate: {},
  compName: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.ADD_CANDIDATES:
      return { ...state, list: [...state.list , action.payload ] };

    default:
      return state;
  }
};

export default rootReducer;
