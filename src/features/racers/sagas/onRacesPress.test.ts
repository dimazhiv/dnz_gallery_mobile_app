import { takeLatest } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';
import { setRacesData, setRacesDataLoadFailed, setShowRacesLoading } from '../slice';
import { onRacesPress } from '../sagaActions';
import { getDriverName } from '../selectors';
import { _onRacesPress, watchOnRacesPress } from './onRacesPress';
import { navigateTo } from '../../../App';
import { RACES_SCREEN } from '../../../rootConstants';
import { loadDriverRacesData } from '../services';
import { RaceData } from '../../../types/RaceData';

describe('racersFeature.onRacesPress saga', () => {
  const action = { payload: 'Fernando Alonso', type: 'string' };
  const driverName = 'Fernando Alonso';
  const races: RaceData[] = [
    {
      date: 'string',
      raceName: 'Fernando Alonso',
      finalPosition: 1,
      url: 'http.granpri.result.com'
    }
  ];

  it('should do properly actions when Races press', () => {
    testSaga(_onRacesPress, action)
      .next()
      .select(getDriverName, action.payload)
      .next(driverName)
      .call(navigateTo, RACES_SCREEN, { title: driverName })
      .next()
      .put(setShowRacesLoading(true))
      .next()
      .put(setRacesDataLoadFailed(false))
      .next()
      .call(loadDriverRacesData, action.payload)
      .next(races)
      .put(setRacesData(races))
      .next()
      .put(setShowRacesLoading(false))
      .next()
      .isDone();
  });

  it('should do properly actions when Races press and process failed', () => {
    const error = { name: 'loadDriverInfoData error', message: 'failed' };
    testSaga(_onRacesPress, action)
      .next()
      .select(getDriverName, action.payload)
      .next(driverName)
      .call(navigateTo, RACES_SCREEN, { title: driverName })
      .next()
      .put(setShowRacesLoading(true))
      .next()
      .put(setRacesDataLoadFailed(false))
      .next()
      .call(loadDriverRacesData, action.payload)
      .throw(error)
      .put(setRacesDataLoadFailed(true))
      .next()
      .put(setRacesData([]))
      .next()
      .put(setShowRacesLoading(false))
      .next()
      .isDone();
  });
});

describe('racersFeature.onRacesPress watcher', () => {
  it('should fire on onRacesPress action', () => {
    const generator = watchOnRacesPress();
    expect(generator.next().value).toEqual(takeLatest(onRacesPress.type, _onRacesPress));
  });
});
