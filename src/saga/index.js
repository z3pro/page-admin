import { takeLatest, all, take } from "redux-saga/effects";
import * as actionTypes from "../redux/constants/actionTypes";
import * as userSaga from "./userSaga";
import * as categorySaga from "./categorySaga";

export const rootSaga = function* () {
  yield all([
    //user
    yield takeLatest(actionTypes.TYPE_USER_GET, userSaga.USER_SAGA_GET),
    yield takeLatest(actionTypes.TYPE_USER_SEARCH, userSaga.USER_SAGA_SEARCH),
    yield takeLatest(actionTypes.TYPE_USER_POST, userSaga.USER_SAGA_POST),
    //product
    yield takeLatest(actionTypes.TYPE_PRODUCT_GET, userSaga.PRODUCT_SAGA_GET),
    yield takeLatest(actionTypes.TYPE_PRODUCT_PUT, userSaga.PRODUCT_SAGA_PUT),
    yield takeLatest(actionTypes.TYPE_PRODUCT_POST, userSaga.PRODUCT_SAGA_POST),
    yield takeLatest(
      actionTypes.TYPE_PRODUCT_DELETE,
      userSaga.PRODUCT_SAGA_DELETE
    ),
    yield takeLatest(
      actionTypes.TYPE_PRODUCT_SEARCH,
      userSaga.PRODUCT_SAGA_SEARCH
    ),
    yield takeLatest(
      actionTypes.TYPE_PRODUCT_SEARCH_ASC,
      userSaga.PRODUCT_SAGA_SEARCH_ASC
    ),
    yield takeLatest(
      actionTypes.TYPE_PRODUCT_SEARCH_DESC,
      userSaga.PRODUCT_SAGA_SEARCH_DESC
    ),
    yield takeLatest(
      actionTypes.TYPE_PRODUCT_SEARCH_CATEGORY,
      userSaga.PRODUCT_SAGA_SEARCH_CATEGORY
    ),
    //category
    yield takeLatest(
      actionTypes.TYPE_CATEGORY_GET,
      categorySaga.CATEGORY_SAGA_GET
    ),
    yield takeLatest(
      actionTypes.TYPE_CATEGORY_PUT,
      categorySaga.CATEGORY_SAGA_PUT
    ),
    yield takeLatest(
      actionTypes.TYPE_CATEGORY_POST,
      categorySaga.CATEGORY_SAGA_POST
    ),
    yield takeLatest(
      actionTypes.TYPE_CATEGORY_DELETE,
      categorySaga.CATEGORY_SAGA_DELETE
    ),
    yield takeLatest(
      actionTypes.TYPE_CATEGORY_SEARCH,
      categorySaga.CATEGORY_SAGA_SEARCH
    ),
    yield takeLatest(
      actionTypes.TYPE_CATEGORY_SEARCH_ASC,
      categorySaga.CATEGORY_SAGA_SEARCH_ASC
    ),
    yield takeLatest(
      actionTypes.TYPE_CATEGORY_SEARCH_DESC,
      categorySaga.CATEGORY_SAGA_SEARCH_DESC
    ),
  ]);
};
