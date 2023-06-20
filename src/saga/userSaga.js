import { call, put } from "redux-saga/effects";
import * as userService from "../api/user_service";
import * as productService from "../api/product_service";
import { ACT_SET_PRODUCT, ACT_SET_USER } from "../redux/actions";
//USER
export const USER_SAGA_GET = function* () {
  let listUsers = yield call(userService.GET_USER);
  yield put(ACT_SET_USER(listUsers));
};
export const USER_SAGA_POST = function* (action) {
  try {
    yield call(userService.POST_USER, action.payload);
    alert("Đăng ký tài khoản thành công!");
    let listUsers = yield call(userService.GET_USER);
    yield put(ACT_SET_USER(listUsers));
  } catch (error) {}
};
export const USER_SAGA_SEARCH = function* (action) {
  let listUsers = yield call(userService.SEARCH_USER, action.payload);
  yield put(ACT_SET_USER(listUsers));
};
//product
export const PRODUCT_SAGA_GET = function* () {
  let listProducts = yield call(productService.GET_PRODUCT);
  yield put(ACT_SET_PRODUCT(listProducts));
};
export const PRODUCT_SAGA_POST = function* (action) {
  yield call(productService.POST_PRODUCT, action.payload);
  let listProducts = yield call(productService.GET_PRODUCT);
  yield put(ACT_SET_PRODUCT(listProducts));
};
export const PRODUCT_SAGA_PUT = function* (action) {
  yield call(productService.PUT_PRODUCT, action.payload);
  let listProducts = yield call(productService.GET_PRODUCT);
  yield put(ACT_SET_PRODUCT(listProducts));
};
export const PRODUCT_SAGA_DELETE = function* (action) {
  yield call(productService.DELETE_PRODUCT, action.payload);
  let listProducts = yield call(productService.GET_PRODUCT);
  yield put(ACT_SET_PRODUCT(listProducts));
};
export const PRODUCT_SAGA_SEARCH = function* (action) {
  let listProducts = yield call(productService.SEARCH_PRODUCT, action.payload);
  yield put(ACT_SET_PRODUCT(listProducts));
};
export const PRODUCT_SAGA_SEARCH_ASC = function* (action) {
  let listProducts = yield call(productService.SEARCH_PRODUCT_ASC, action.payload);
  yield put(ACT_SET_PRODUCT(listProducts.sort((a,b)=>a.price-b.price)));
};
export const PRODUCT_SAGA_SEARCH_DESC = function* (action) {
  let listProducts = yield call(productService.SEARCH_PRODUCT_DESC, action.payload);
  yield put(ACT_SET_PRODUCT(listProducts.sort((a,b)=>b.price-a.price)));
};
export const PRODUCT_SAGA_SEARCH_CATEGORY = function* () {
  console.log(3333);
  let listProducts = yield call(productService.GET_PRODUCT);
  yield put(ACT_SET_PRODUCT(listProducts.sort((a,b)=>a.category.localeCompare(b.category))));
};
