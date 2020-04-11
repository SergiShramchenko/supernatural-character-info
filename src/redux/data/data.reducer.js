import {
  FETCHING_DATA_START,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAIL,
  GET_SEARCH_VALUE,
  GET_SEARCH_RESULT,
} from './data.types';

const initialState = {
  loading: false,
  error: false,
  data: [],
  searchValue: '',
  searchResult: [],
};

export default (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case FETCHING_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case FETCHING_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };

    case GET_SEARCH_RESULT:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
