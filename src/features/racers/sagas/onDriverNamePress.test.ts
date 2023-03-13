import { takeLatest } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';
import { onDriverNamePress, onLoadDriverInfo } from '../sagaActions';
import { DRIVER_INFO_SCREEN } from '../../../rootConstants';
import { navigateTo } from '../../../App';
import { _onDriverNamePress, watchOnDriverNamePress } from './onDriverNamePress';

describe('racersFeature.onDriverNamePress saga', () => {
  it('should do properly actions when driver name pressed', () => {
    const action = { payload: 'driver1', type: 'string' };
    testSaga(_onDriverNamePress, action)
      .next()
      .call(navigateTo, DRIVER_INFO_SCREEN, null)
      .next()
      .put(onLoadDriverInfo(action.payload))
      .next()
      .isDone();
  });
});

describe('racersFeature.onDriverNamePress watcher', () => {
  it('should fire on onDriverNamePress action', () => {
    const generator = watchOnDriverNamePress();
    expect(generator.next().value).toEqual(takeLatest(onDriverNamePress.type, _onDriverNamePress));
  });
});
