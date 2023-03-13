import { call, put, takeLatest } from 'redux-saga/effects';
import { onDriverNamePress, onLoadDriverInfo } from '../sagaActions';
import { navigateTo } from '../../../App';
import { DRIVER_INFO_SCREEN } from '../../../rootConstants';
import { PayloadAction } from '@reduxjs/toolkit';

export function* _onDriverNamePress({ payload }: PayloadAction<string>) {
  console.log('----saga racers._onDriverNamePress saga-----', payload);
  yield call(navigateTo, DRIVER_INFO_SCREEN, null);
  yield put(onLoadDriverInfo(payload));
}

export function* watchOnDriverNamePress() {
  yield takeLatest(onDriverNamePress.type, _onDriverNamePress);
}
