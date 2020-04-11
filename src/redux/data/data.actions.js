import {
  FETCHING_DATA_START,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAIL,
  GET_SEARCH_VALUE,
  GET_SEARCH_RESULT,
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

export const getSearchResult = (data) => ({
  type: GET_SEARCH_RESULT,
  payload: data,
});
