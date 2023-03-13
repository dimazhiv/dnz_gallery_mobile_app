import { put, select, takeEvery } from 'redux-saga/effects';
import { setCurrentPage } from '../slice';
import { onPrevPagePress, onSelectDriversDataForCurrentPage } from '../sagaActions';
import { getCurrentPage } from '../selectors';

export function* _onPrevPagePress() {
  console.log('----saga racers._onPrevPagePress saga-----');
  const currentPageNumber: number = yield select(getCurrentPage);
  const nextPage: number = yield put(setCurrentPage(currentPageNumber - 1));
  yield put(onSelectDriversDataForCurrentPage(nextPage));
}

export function* watchOnPrevPagePress() {
  yield takeEvery(onPrevPagePress.type, _onPrevPagePress);
}
