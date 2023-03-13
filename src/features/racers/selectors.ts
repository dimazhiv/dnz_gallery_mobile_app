import { NAME } from './constants';
import { RootStateType } from '../../setupStore';
import { ById, DriversIds } from '../../types/NormalizedLoadedDrivers';
import { DriverData } from '../../types/DriverData';
import { DRIVERS_NUMBER_LIMIT, FIRST_START_PAGE } from '../../rootConstants';
import { RaceData } from '../../types/RaceData';
import { DriverId } from '../../types/Types';

export const showRacesLoading = (state: RootStateType): boolean => state[NAME].showRacesLoading;
export const isRacesDataLoadFailed = (state: RootStateType): boolean => state[NAME].racesDataLoadFailed;
export const getRaces = (state: RootStateType): RaceData[] => state[NAME].races;
export const getDriversIds = (state: RootStateType): DriversIds => state[NAME].driversIds;
export const getDrivers = (state: RootStateType): ById<DriverData> => state[NAME].byId;
export const getActiveDriverInfo = (state: RootStateType): DriverData | {} => state[NAME].activeDriverInfo;
export const getCurrentPage = (state: RootStateType): number => state[NAME].currentPageNumber;
export const getMaxOffset = (state: RootStateType) => state[NAME].maxOffset;
export const getDriverName = (state: RootStateType, driverId: DriverId) => {
  const drivers = getDrivers(state);
  const { givenName, familyName } = drivers[driverId];
  return `${givenName} ${familyName}`;
};

export const showPrevButton = (state: RootStateType): boolean => getCurrentPage(state) !== FIRST_START_PAGE;

export const getCurrentPageDriverIds = (state: RootStateType): DriversIds => {
  const currentPage = getCurrentPage(state);
  const driversIds = getDriversIds(state);
  const currentOffset = currentPage * DRIVERS_NUMBER_LIMIT;
  return driversIds.length ? driversIds.slice(currentOffset - DRIVERS_NUMBER_LIMIT, currentOffset) : [];
};

export const getDriver = (state: RootStateType, driverId: string): DriverData => {
  const drivers = getDrivers(state);
  return drivers[driverId];
};
