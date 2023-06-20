import { call, put } from "redux-saga/effects";
import { ACT_SET_CATEGORY } from "../redux/actions";
import * as categoryService from "../api/category_service";

export const CATEGORY_SAGA_GET = function* () {
    let listCategory = yield call(categoryService.GET_CATEGORY);
    yield put(ACT_SET_CATEGORY(listCategory));
  };
  export const CATEGORY_SAGA_POST = function* (action) {
    yield call(categoryService.POST_CATEGORY, action.payload);
    let listCategory = yield call(categoryService.GET_CATEGORY);
    yield put(ACT_SET_CATEGORY(listCategory));
  };
  export const CATEGORY_SAGA_PUT = function* (action) {
    yield call(categoryService.PUT_CATEGORY, action.payload);
    let listCategory = yield call(categoryService.GET_CATEGORY);
    yield put(ACT_SET_CATEGORY(listCategory));
  };
  export const CATEGORY_SAGA_DELETE = function* (action) {
    yield call(categoryService.DELETE_CATEGORY, action.payload);
    let listCategory = yield call(categoryService.GET_CATEGORY);
    yield put(ACT_SET_CATEGORY(listCategory));
  };
  export const CATEGORY_SAGA_SEARCH = function* (action) {
    let listCategory = yield call(categoryService.SEARCH_CATEGORY, action.payload);
    yield put(ACT_SET_CATEGORY(listCategory));
  };
  export const CATEGORY_SAGA_SEARCH_DESC = function* (action) {
    let listCategory = yield call(categoryService.GET_CATEGORY);
    yield put(ACT_SET_CATEGORY(listCategory.sort((a,b)=>a.title.localeCompare(b.title))));
  };
  export const CATEGORY_SAGA_SEARCH_ASC = function* () {
    let listCategory = yield call(categoryService.GET_CATEGORY);
    yield put(ACT_SET_CATEGORY(listCategory.sort((a,b)=>b.title.localeCompare(a.title))));
  };
  