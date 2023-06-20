import { TYPE_SET_USER_STATE, TYPE_USER_GET } from "../constants/actionTypes";

export const initialState = [];

const users = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_SET_USER_STATE:
        state = [...action.payload]
      return state;
    default:
      return state;
  }
};
export default users;
