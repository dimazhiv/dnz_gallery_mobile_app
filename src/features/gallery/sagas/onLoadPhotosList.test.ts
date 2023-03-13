import { takeLatest } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';
import { loadPhotosList } from '../services';
import { setPhotos } from '../slice';
import { onLoadPhotosList } from '../sagaActions';
import { _onLoadPhotosList, watchOnLoadPhotosList } from './onLoadPhotosList';

describe('galleryFeature.onLoadPhotosList saga', () => {
  it('should do properly actions for load photos list', () => {
    const photos = { byId: {}, photosIds: [] };

    testSaga(_onLoadPhotosList).next().call(loadPhotosList).next(photos).put(setPhotos(photos)).next().isDone();
  });

  it('should do properly actions when load photos list error', () => {
    const error = { name: 'onLoadPhotosList error', message: 'failed' };
    testSaga(_onLoadPhotosList).next().call(loadPhotosList).throw(error).call(console.error, error).next().isDone();
  });
});

describe('racersFeature.onLoadPhotosList watcher', () => {
  it('should fire on onLoadPhotosList action', () => {
    const generator = watchOnLoadPhotosList();
    expect(generator.next().value).toEqual(takeLatest(onLoadPhotosList.type, _onLoadPhotosList));
  });
});
