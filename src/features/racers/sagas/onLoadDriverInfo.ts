import { call, put, takeLatest } from 'redux-saga/effects';
import { setActiveDriverInfo } from '../slice';
import { onLoadDriverInfo } from '../sagaActions';
import { loadDriverInfoData } from '../services';
import { DriverData } from '../../../types/DriverData';
import { PayloadAction } from '@reduxjs/toolkit';

export function* _onLoadDriverInfo({ payload }: PayloadAction<string>) {
  console.log('----saga racers._onLoadDriverInfo saga-----', payload);
  try {
    const driverInfo: DriverData = yield call(loadDriverInfoData as any, payload);
    yield put(setActiveDriverInfo(driverInfo));
  } catch (error) {
    yield call(console.error, error);
  }
}

export function* watchOnLoadDriverInfo() {
  yield takeLatest(onLoadDriverInfo.type, _onLoadDriverInfo);
}
