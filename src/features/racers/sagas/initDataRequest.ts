import { call, put, select, takeLatest } from 'redux-saga/effects';
import { initDataRequest } from '../sagaActions';
import { getDriversIds } from '../selectors';
import { loadDriversData } from '../services';
import { DRIVERS_NUMBER_LIMIT } from '../../../rootConstants';
import { DriversIds, NormalizedLoadedDrivers } from '../../../types/NormalizedLoadedDrivers';
import { setDriversData, setMaxOffset } from '../slice';

export function* _initDataRequest() {
  console.log('----saga racers._initDataRequest saga-----');
  const driversIds = (yield select(getDriversIds)) as DriversIds;
  if (driversIds.length === 0) {
    try {
      const driversData = (yield call(loadDriversData, DRIVERS_NUMBER_LIMIT, 0)) as NormalizedLoadedDrivers;
      yield put(setDriversData(driversData));
      yield put(setMaxOffset(DRIVERS_NUMBER_LIMIT));
    } catch (error) {
      console.error(error);
    }
  }
}

export function* watchInitDataRequest() {
  yield takeLatest(initDataRequest.type, _initDataRequest);
}
