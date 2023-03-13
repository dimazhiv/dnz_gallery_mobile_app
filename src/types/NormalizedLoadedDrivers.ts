import { DriverData } from './DriverData';

export interface NormalizedLoadedDrivers {
  byId: ById<DriverData>;
  driversIds: DriversIds;
}

export type ById<T> = { [key: string]: T };

export type DriversIds = string[];
