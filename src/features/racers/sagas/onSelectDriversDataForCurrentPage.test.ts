import { takeEvery } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';
import { setDriversData, setMaxOffset } from '../slice';
import { getMaxOffset } from '../selectors';
import { DRIVERS_NUMBER_LIMIT } from '../../../rootConstants';
import { loadDriversData } from '../services';
import {
  _onSelectDriversDataForCurrentPage,
  watchOnSelectDriversDataForCurrentPage
} from './onSelectDriversDataForCurrentPage';
import { onSelectDriversDataForCurrentPage } from '../sagaActions';

describe('racersFeature.onSelectDriversDataForCurrentPage saga', () => {
  const action = { payload: 1, type: 'string' };
  const currentOffset = 8;
  const driversData = {
    byId: {
      driver1: {
        driverId: 'driver1',
        url: 'https://driver1.info',
        givenName: 'Fernando',
        familyName: 'Alonso',
        dateOfBirth: '13.02.1990',
        nationality: 'Spanish'
      }
    },
    driversIds: ['driverId']
  };

  it('should do properly actions for select drivers data for current page when no drivers in state', () => {
    const maxOffset = 0;
    testSaga(_onSelectDriversDataForCurrentPage, action)
      .next()
      .select(getMaxOffset)
      .next(maxOffset)
      .put(setMaxOffset(currentOffset))
      .next()
      .call(loadDriversData, DRIVERS_NUMBER_LIMIT, currentOffset)
      .next(driversData)
      .put(setDriversData(driversData))
      .next()
      .isDone();
  });

  it('should do nothing for select drivers data for current page when drivers are already in state', () => {
    const maxOffset = 16;
    testSaga(_onSelectDriversDataForCurrentPage, action).next().select(getMaxOffset).next(maxOffset).isDone();
  });

  it('should do properly actions for select drivers data for current page when no drivers in state and process failed', () => {
    const error = { name: 'selectDriversDataForCurrentPage error', message: 'failed' };
    const maxOffset = 0;
    testSaga(_onSelectDriversDataForCurrentPage, action)
      .next()
      .select(getMaxOffset)
      .next(maxOffset)
      .put(setMaxOffset(currentOffset))
      .next()
      .call(loadDriversData, DRIVERS_NUMBER_LIMIT, currentOffset)
      .throw(error)
      .call(console.error, error)
      .next()
      .isDone();
  });
});

describe('racersFeature.onSelectDriversDataForCurrentPage watcher', () => {
  it('should fire on onSelectDriversDataForCurrentPage action', () => {
    const generator = watchOnSelectDriversDataForCurrentPage();
    expect(generator.next().value).toEqual(
      takeEvery(onSelectDriversDataForCurrentPage.type, _onSelectDriversDataForCurrentPage)
    );
  });
});
