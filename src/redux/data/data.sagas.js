import { takeLatest, put, all, call } from 'redux-saga/effects';

import { GET_DATA } from './data.types';

import { fetchDataCollection } from './data.actions';

export function* getData() {
  try {
  } catch (error) {}
}

export function* GetDataForApp() {
  yield takeLatest(GET_DATA, getData);
}

export function* dataSagas() {
  yield all([call(GetDataForApp)]);
}
