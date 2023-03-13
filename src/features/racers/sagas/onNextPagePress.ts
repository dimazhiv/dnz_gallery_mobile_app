import { put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { setCurrentPage } from '../slice';
import { onNextPagePress, onSelectDriversDataForCurrentPage } from '../sagaActions';
import { getCurrentPage } from '../selectors';

export function* _onNextPagePress() {
  console.log('----saga racers._onNextPagePress saga-----');
  const currentPageNumber: number = yield select(getCurrentPage);
  const nextPage = currentPageNumber + 1;
  yield put(setCurrentPage(nextPage));
  yield put(onSelectDriversDataForCurrentPage(nextPage));
}

export function* watchOnNextPagePress() {
  yield takeEvery(onNextPagePress.type, _onNextPagePress);
}
