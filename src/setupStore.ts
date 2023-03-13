import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import gallerySlice from './features/gallery/slice';
import rootSaga from './rootSaga';
import { onLoadPhotosList } from './features/gallery/sagaActions';

const rootReducer = combineReducers({
  gallery: gallerySlice
});

export default function setupStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: false,
        serializableCheck: {
          ignoredActions: [onLoadPhotosList.type]
        }
      }).concat(sagaMiddleware)
  });
  sagaMiddleware.run(rootSaga);

  return { store };
}

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = ReturnType<typeof setupStore>;
