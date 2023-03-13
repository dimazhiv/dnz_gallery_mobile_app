import { createAction } from '@reduxjs/toolkit';
import { NAME } from './constants';
import { Uri } from '../../types/Types';

export const onLoadPhotosList = createAction(`${NAME}/ON_LOAD_PHOTOS_LIST`);
export const onPhotoPress = createAction<Uri>(`${NAME}/ON_PHOTO_PRESS`);
