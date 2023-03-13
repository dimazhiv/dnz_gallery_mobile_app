import { useCallback } from 'react';
import { Alert, Linking } from 'react-native';

export const useOpenLink = (url: string) =>
  useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    supported ? await Linking.openURL(url) : Alert.alert(`Don't know how to open this URL: ${url}`);
  }, [url]);
