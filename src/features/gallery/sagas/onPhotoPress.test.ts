import { takeLatest } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';
import { setCurrentPhotoUri } from '../slice';
import { onPhotoPress } from '../sagaActions';
import { _onPhotoPress, watchOnPhotoPress } from './onPhotoPress';
import { navigateTo } from '../../../App';
import { PHOTO_SCREEN } from '../../../rootConstants';

describe('galleryFeature.onPhotoPress saga', () => {
  it('should do properly actions when press on photo', () => {
    const action = { payload: 'driver1', type: 'string' };
    testSaga(_onPhotoPress, action)
      .next()
      .put(setCurrentPhotoUri(action.payload))
      .next(action.payload)
      .call(navigateTo, PHOTO_SCREEN, null)
      .next()
      .isDone();
  });
});

describe('racersFeature.onPhotoPress watcher', () => {
  it('should fire on onPhotoPress action', () => {
    const generator = watchOnPhotoPress();
    expect(generator.next().value).toEqual(takeLatest(onPhotoPress.type, _onPhotoPress));
  });
});
