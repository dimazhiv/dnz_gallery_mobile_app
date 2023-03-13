import { PhotoData } from './PhotoData';

export interface NormalizedPhotos {
  byId: ById<PhotoData>;
  photosIds: PhotosIds;
}

export type ById<T> = { [key: string]: T };

export type PhotosIds = string[];
