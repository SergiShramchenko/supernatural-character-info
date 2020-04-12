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

const initialState = {
  loading: false,
  error: false,
  data: [],
  searchValue: '',
  searchField: [
    'all',
    'name',
    'info',
    'death_reason',
    'killer',
    'murder_weapon',
  ],
  choosedSearchField: 'all',
  fieldNumber: 0,
  sortNumber: 0,
  deleteField: false,
  addField: false,
  addCart: false,
  test: true,
};

export default (state = initialState, action) => {
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
    case CHAGE_FIELD:
      return {
        ...state,
        choosedSearchField: action.payload,
      };
    case SORT_TABLE_FIELD:
      return {
        ...state,
        data: action.payload,
        sortNumber: state.sortNumber + 1,
      };
    case DELETE_TABLE_FIELD:
      return {
        ...state,
        deleteField: state.deleteField ? false : true,
      };
    case DELETE_FIELD_FROM_TABLE:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_TABLE_FIELD:
      return {
        ...state,
        addField: true,
        addCart: false,
      };
    case ADD_CART:
      return {
        ...state,
        addCart: true,
        addField: false,
        test: false,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};
