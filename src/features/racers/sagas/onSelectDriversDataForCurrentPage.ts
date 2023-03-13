import { call, put, select, takeEvery } from 'redux-saga/effects';
import { setDriversData, setMaxOffset } from '../slice';
import { loadDriversData } from '../services';
import { NormalizedLoadedDrivers } from '../../../types/NormalizedLoadedDrivers';
import { onSelectDriversDataForCurrentPage } from '../sagaActions';
import { getMaxOffset } from '../selectors';
import { DRIVERS_NUMBER_LIMIT } from '../../../rootConstants';
import { PayloadAction } from '@reduxjs/toolkit';

export function* _onSelectDriversDataForCurrentPage({ payload }: PayloadAction<number>) {
  console.log('----saga racers._onSelectDriversDataForCurrentPage saga-----', payload);
  const limit = DRIVERS_NUMBER_LIMIT;
  const currentOffset = payload * limit;
  const maxOffset: number = yield select(getMaxOffset);
  if (currentOffset > maxOffset) {
    try {
      yield put(setMaxOffset(currentOffset));
      const driversData = (yield call(loadDriversData, limit, currentOffset)) as NormalizedLoadedDrivers;
      yield put(setDriversData(driversData));
    } catch (error) {
      yield call(console.error, error);
    }
  }
}

export function* watchOnSelectDriversDataForCurrentPage() {
  yield takeEvery(onSelectDriversDataForCurrentPage.type, _onSelectDriversDataForCurrentPage);
}
