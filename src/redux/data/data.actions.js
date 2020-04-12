import {
  FETCHING_DATA_START,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAIL,
  GET_SEARCH_VALUE,
  CHAGE_FIELD,
  SORT_TABLE_FIELD,
  DELETE_TABLE_FIELD,
  DELETE_FIELD_FROM_TABLE,
  ADD_TABLE_FIELD,
  ADD_CART,
} from './data.types';

export const fetchDataStart = () => ({
  type: FETCHING_DATA_START,
});

export const fetchDataSuccess = (data) => ({
  type: FETCHING_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFail = (error) => ({
  type: FETCHING_DATA_FAIL,
  payload: error,
});

export const getSearchValue = (searchValue) => ({
  type: GET_SEARCH_VALUE,
  payload: searchValue,
});

export const changeField = (field) => ({
  type: CHAGE_FIELD,
  payload: field,
});

export const sortTableField = (table) => ({
  type: SORT_TABLE_FIELD,
  payload: table,
});

export const deleteTableField = () => ({
  type: DELETE_TABLE_FIELD,
});

export const deleteFieldFromTable = (table) => ({
  type: DELETE_FIELD_FROM_TABLE,
  payload: table,
});

export const addTableField = () => ({
  type: ADD_TABLE_FIELD,
});

export const addCartToTable = () => ({
  type: ADD_CART,
});
