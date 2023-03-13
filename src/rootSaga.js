import { all, call } from 'redux-saga/effects';
import { saga as racersSaga } from './features/racers';
import { saga as gallerySaga } from './features/gallery';

function* rootSaga() {
  yield all([call(gallerySaga), call(racersSaga)]);
}

export default rootSaga;
