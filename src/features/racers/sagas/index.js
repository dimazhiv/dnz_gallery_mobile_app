import { all, call } from 'redux-saga/effects';

import { watchInitDataRequest } from './initDataRequest';
import { watchOnDriverNamePress } from './onDriverNamePress';
import { watchOnLoadDriverInfo } from './onLoadDriverInfo';
import { watchOnNextPagePress } from './onNextPagePress';
import { watchOnPrevPagePress } from './onPrevPagePress';
import { watchOnSelectDriversDataForCurrentPage } from './onSelectDriversDataForCurrentPage';
import { watchOnRacesPress } from './onRacesPress';

export default function* racersSaga() {
  yield all([
    call(watchInitDataRequest),
    call(watchOnDriverNamePress),
    call(watchOnLoadDriverInfo),
    call(watchOnNextPagePress),
    call(watchOnPrevPagePress),
    call(watchOnSelectDriversDataForCurrentPage),
    call(watchOnRacesPress)
  ]);
}
