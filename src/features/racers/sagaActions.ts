import { createAction } from '@reduxjs/toolkit';
import { NAME } from './constants';
import { DriverId, PageNumber } from '../../types/Types';

export const initDataRequest = createAction(`${NAME}/INIT_DATA_REQUEST`);
export const onDriverNamePress = createAction(`${NAME}/ON_DRIVER_NAME_PRESS`);
export const onRacesPress = createAction<DriverId>(`${NAME}/ON_RACES_PRESS`);
export const onLoadDriverInfo = createAction<DriverId>(`${NAME}/ON_LOAD_DRIVER_INFO_DATA`);
export const onNextPagePress = createAction(`${NAME}/ON_NEXT_PAGE_PRESS`);
export const onPrevPagePress = createAction(`${NAME}/ON_PREV_PAGE_PRESS`);
export const onSelectDriversDataForCurrentPage = createAction<PageNumber>(
  `${NAME}/ON_SELECT_DRIVERS_DATA_FOR_CURRENT_PAGE`
);
