import { all, call } from 'redux-saga/effects';

import { watchOnLoadPhotosList } from './onLoadPhotosList';
import { watchOnPhotoPress } from './onPhotoPress';

export default function* gallerySaga() {
  yield all([call(watchOnLoadPhotosList), call(watchOnPhotoPress)]);
}
