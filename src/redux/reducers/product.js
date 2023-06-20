import { TYPE_SET_PRODUCT_STATE } from "../constants/actionTypes";
export const initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_SET_PRODUCT_STATE:
        state = [...action.payload]
      return state;
    default:
      return state;
  }
};
export default products;