import React, { useEffect } from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import DriversList from '../../features/racers/components/DriversList/DriversListContainer';

type Props = {
  navigation: any;
  showPrevButton: boolean;
  onNextPagePress: () => void;
  onPrevPagePress: () => void;
};

function DriversTable({ showPrevButton, navigation, onNextPagePress, onPrevPagePress }: Props) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => showPrevButton && <Button onPress={onPrevPagePress} title={'<'} />,
      headerRight: () => <Button onPress={onNextPagePress} title={'>'} />
    });
  }, [showPrevButton]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <DriversList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default DriversTable;
