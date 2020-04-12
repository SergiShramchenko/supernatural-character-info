import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import { FETCHING_DATA_START } from './data.types';

import { fetchDataSuccess, fetchDataFail } from './data.actions';

function apiCall() {
  return axios({ method: 'get', url: 'data.json' });
}

function* getData() {
  try {
    const response = yield call(apiCall);
    const data = response.data.data;
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFail(error));
  }
}

function* getDataForApp() {
  yield takeLatest(FETCHING_DATA_START, getData);
}

export function* dataSagas() {
  yield all([call(getDataForApp)]);
}
