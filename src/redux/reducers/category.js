import { TYPE_SET_CATEGORY_STATE } from "../constants/actionTypes";


export const initialState = [];

const category = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_SET_CATEGORY_STATE:
        state = [...action.payload]
      return state;
    default:
      return state;
  }
};
export default category;