import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import setupStore from './setupStore';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GALLERY_SCREEN, PHOTO_SCREEN } from './rootConstants';
import Gallery from './screens/Gallery/Gallery';
import Photo from './screens/Photo/Photo';
import { onLoadPhotosList } from './features/gallery/sagaActions';

const { store } = setupStore();

type Screens = {
  Gallery: {};
  Photo: {};
};
const { Navigator, Screen } = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef<Screens>();

export function navigateTo(name: keyof Screens, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function AppNavigation() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onLoadPhotosList());
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        initialRouteName={GALLERY_SCREEN}
        screenOptions={{
          headerBackTitleVisible: false,
          gestureEnabled: false
        }}>
        <Screen name={GALLERY_SCREEN} component={Gallery} />
        <Screen name={PHOTO_SCREEN} component={Photo} />
      </Navigator>
    </NavigationContainer>
  );
}

function AppProvider() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default AppProvider;
