import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ById, PhotosIds } from '../../types/NormalizedPhotos';
import { PhotoData } from '../../types/PhotoData';

export interface GalleryState {
  photosIds: PhotosIds;
  byId: ById<PhotoData>;
  currentPhotoUri: string;
}

const initialState: GalleryState = {
  photosIds: [],
  byId: {},
  currentPhotoUri: ''
};

const slice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<{ byId: ById<PhotoData>; photosIds: PhotosIds }>) => {
      const { byId, photosIds } = action.payload;
      state.photosIds = photosIds;
      state.byId = byId;
    },
    setCurrentPhotoUri: (state, action: PayloadAction<string>) => {
      state.currentPhotoUri = action.payload;
    }
  }
});

export const { setPhotos, setCurrentPhotoUri } = slice.actions;
export default slice.reducer;
