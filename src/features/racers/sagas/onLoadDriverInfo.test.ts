import { takeLatest } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';
import { loadDriverInfoData } from '../services';
import { _onLoadDriverInfo, watchOnLoadDriverInfo } from './onLoadDriverInfo';
import { setActiveDriverInfo } from '../slice';
import { onLoadDriverInfo } from '../sagaActions';

describe('racersFeature.onLoadDriverInfo saga', () => {
  it('should do properly actions for load driver info', () => {
    const driverInfo = {
      driverId: 'driver1',
      url: 'https://driver1.info',
      givenName: 'Fernando',
      familyName: 'Alonso',
      dateOfBirth: '13.02.1990',
      nationality: 'Spanish'
    };
    const action = { payload: 'driver1', type: 'string' };
    testSaga(_onLoadDriverInfo, action)
      .next()
      .call(loadDriverInfoData as any, action.payload)
      .next(driverInfo)
      .put(setActiveDriverInfo(driverInfo))
      .next()
      .isDone();
  });

  it('should do properly actions when load driver info error', () => {
    const action = { payload: 'driver1', type: 'string' };
    const error = { name: 'loadDriverInfoData error', message: 'failed' };
    testSaga(_onLoadDriverInfo, action)
      .next()
      .call(loadDriverInfoData as any, action.payload)
      .throw(error)
      .call(console.error, error)
      .next()
      .isDone();
  });
});

describe('racersFeature.onLoadDriverInfo watcher', () => {
  it('should fire on onLoadDriverInfo action', () => {
    const generator = watchOnLoadDriverInfo();
    expect(generator.next().value).toEqual(takeLatest(onLoadDriverInfo.type, _onLoadDriverInfo));
  });
});
