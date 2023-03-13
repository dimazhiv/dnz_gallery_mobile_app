import { call, put, takeLatest } from 'redux-saga/effects';
import { onPhotoPress } from '../sagaActions';
import { navigateTo } from '../../../App';
import { PHOTO_SCREEN } from '../../../rootConstants';
import { setCurrentPhotoUri } from '../slice';
import { PayloadAction } from '@reduxjs/toolkit';

export function* _onPhotoPress({ payload }: PayloadAction<string>) {
  console.log('----saga racers._onPhotoPress saga-----');
  yield put(setCurrentPhotoUri(payload));
  yield call(navigateTo, PHOTO_SCREEN, null);
}

export function* watchOnPhotoPress() {
  yield takeLatest(onPhotoPress.type, _onPhotoPress);
}
