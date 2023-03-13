import { NAME } from './constants';
import { RootStateType } from '../../setupStore';
import { PhotoData } from '../../types/PhotoData';
import { ById, PhotosIds } from '../../types/NormalizedPhotos';
import { Uri } from '../../types/Types';

export const getPhotos = (state: RootStateType): ById<PhotoData> => state[NAME].byId;
export const getPhotosIds = (state: RootStateType): PhotosIds => state[NAME].photosIds;
export const getCurrentPhoto = (state: RootStateType): Uri => state[NAME].currentPhotoUri;

export const getPhotosUri = (state: RootStateType) => {
  const photosIds = getPhotosIds(state);
  const photos = getPhotos(state);
  const photoUris = photosIds.map((photoId) => {
    const { farm, server, id, secret } = photos[photoId];
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
  });
  return photoUris;
};
