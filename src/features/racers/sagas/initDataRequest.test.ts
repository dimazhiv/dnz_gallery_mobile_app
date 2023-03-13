import { takeLatest } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';
import { initDataRequest } from '../sagaActions';
import { _initDataRequest, watchInitDataRequest } from './initDataRequest';
import { loadDriversData } from '../services';
import { DRIVERS_NUMBER_LIMIT } from '../../../rootConstants';
import { setDriversData, setMaxOffset } from '../slice';
import { getDriversIds } from '../selectors';

describe('racersFeature.initDataRequest saga', () => {
  it('should do properly actions for init data request', () => {
    const driversData = {
      byId: {
        driver1: {
          driverId: 'driver1',
          url: 'https://driver1.info',
          givenName: 'Fernando',
          familyName: 'Alonso',
          dateOfBirth: '13.02.1990',
          nationality: 'Spanish'
        },
        driver2: {
          driverId: 'driver2',
          url: 'https://driver2.info',
          givenName: 'Fernando',
          familyName: 'Alonso',
          dateOfBirth: '13.02.1990',
          nationality: 'Spanish'
        }
      },
      driversIds: ['driver1', 'driver2']
    };
    testSaga(_initDataRequest)
      .next()
      .select(getDriversIds)
      .next([])
      .call(loadDriversData, DRIVERS_NUMBER_LIMIT, 0)
      .next(driversData)
      .put(setDriversData(driversData))
      .next()
      .put(setMaxOffset(DRIVERS_NUMBER_LIMIT))
      .next()
      .isDone();
  });
});

describe('racersFeature.initDataRequest watcher', () => {
  it('should fire on initDataRequest action', () => {
    const generator = watchInitDataRequest();
    expect(generator.next().value).toEqual(takeLatest(initDataRequest.type, _initDataRequest));
  });
});
