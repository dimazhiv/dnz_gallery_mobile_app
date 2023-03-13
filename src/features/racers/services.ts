import { NormalizedLoadedDrivers } from '../../types/NormalizedLoadedDrivers';
import { DriverData } from '../../types/DriverData';
import axios from 'axios';
import { RaceData } from '../../types/RaceData';
import { RACES_NUMBER_MAX } from '../../rootConstants';

async function fetchDriversData(limit: number, offset: number): Promise<DriverData[]> {
  try {
    const response = await axios.get(`https://ergast.com/api/f1/drivers.json?limit=${limit}&offset=${offset}`);
    return response.data.MRData.DriverTable.Drivers;
  } catch (error) {
    throw error;
  }
}

async function fetchRacesData(driverId: string): Promise<[any]> {
  try {
    const response = await axios.get(
      `https://ergast.com/api/f1/drivers/${driverId}/results.json?limit=${RACES_NUMBER_MAX}`
    );
    return response.data.MRData.RaceTable.Races;
  } catch (error) {
    throw error;
  }
}

async function fetchDriverInfoData(driverId: string): Promise<DriverData> {
  try {
    const response = await axios.get(`https://ergast.com/api/f1/drivers/${driverId}.json`);
    return response.data.MRData.DriverTable.Drivers[0];
  } catch (error) {
    throw error;
  }
}

export async function loadDriversData(limit: number, offset: number): Promise<NormalizedLoadedDrivers> {
  try {
    const drivers = await fetchDriversData(limit, offset);
    const driversIds = drivers ? drivers.map((item: DriverData) => item.driverId) : [];
    const byId = drivers.reduce((acc: { [key: string]: DriverData }, item) => {
      acc[item.driverId] = item;
      return acc;
    }, {});
    return { byId, driversIds };
  } catch (error) {
    throw error;
  }
}

export async function loadDriverInfoData(driverId: string): Promise<DriverData> {
  try {
    return await fetchDriverInfoData(driverId);
  } catch (error) {
    throw error;
  }
}

export async function loadDriverRacesData(driverId: string): Promise<RaceData[]> {
  try {
    const races = await fetchRacesData(driverId);
    const racesData = races
      ? races.map((item) => ({
          raceName: item.raceName,
          date: item.date,
          finalPosition: item.Results[0].position,
          url: item.url
        }))
      : [];
    return racesData;
  } catch (error) {
    throw error;
  }
}
