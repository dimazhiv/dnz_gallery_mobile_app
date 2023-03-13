import { all, call } from 'redux-saga/effects';
import { saga as gallerySaga } from './features/gallery';

function* rootSaga() {
  yield all([call(gallerySaga)]);
}

export default rootSaga;
