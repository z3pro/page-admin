import users from "./users";
import products from "./product";
import category from "./category";
import { combineReducers } from "redux";
export const rootReducer = combineReducers({users,products,category});

