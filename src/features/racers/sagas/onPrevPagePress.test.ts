import { takeEvery } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';
import { setCurrentPage } from '../slice';
import { onPrevPagePress, onSelectDriversDataForCurrentPage } from '../sagaActions';
import { getCurrentPage } from '../selectors';
import { _onPrevPagePress, watchOnPrevPagePress } from './onPrevPagePress';

describe('racersFeature.onPrevPagePress saga', () => {
  it('should do properly actions when prev page pressed', () => {
    const currentPage = 3;
    const prevPage = 2;
    testSaga(_onPrevPagePress)
      .next()
      .select(getCurrentPage)
      .next(currentPage)
      .put(setCurrentPage(prevPage))
      .next(prevPage)
      .put(onSelectDriversDataForCurrentPage(prevPage))
      .next()
      .isDone();
  });
});

describe('racersFeature.onPrevPagePress watcher', () => {
  it('should fire on onPrevPagePress action', () => {
    const generator = watchOnPrevPagePress();
    expect(generator.next().value).toEqual(takeEvery(onPrevPagePress.type, _onPrevPagePress));
  });
});
