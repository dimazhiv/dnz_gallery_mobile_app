import { takeEvery } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';
import { setCurrentPage } from '../slice';
import { onNextPagePress, onSelectDriversDataForCurrentPage } from '../sagaActions';
import { getCurrentPage } from '../selectors';
import { _onNextPagePress, watchOnNextPagePress } from './onNextPagePress';

describe('racersFeature.onNextPagePress saga', () => {
  it('should do properly actions when next page pressed', () => {
    const currentPage = 2;
    const nextPage = 3;
    testSaga(_onNextPagePress)
      .next()
      .select(getCurrentPage)
      .next(currentPage)
      .put(setCurrentPage(nextPage))
      .next()
      .put(onSelectDriversDataForCurrentPage(nextPage))
      .next()
      .isDone();
  });
});

describe('racersFeature.onNextPagePress watcher', () => {
  it('should fire on onNextPagePress action', () => {
    const generator = watchOnNextPagePress();
    expect(generator.next().value).toEqual(takeEvery(onNextPagePress.type, _onNextPagePress));
  });
});
