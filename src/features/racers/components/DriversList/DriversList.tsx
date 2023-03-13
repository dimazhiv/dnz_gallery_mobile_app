import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import DriverItem from './DriverItem/DriverItemContainer';
import { DriversIds } from '../../../../types/NormalizedLoadedDrivers';

export type DriversListProps = {
  driversIds: DriversIds;
};

const renderItem = ({ item }: { item: string }) => <DriverItem driverId={item} />;

const renderSeparator = () => <View style={styles.separator} />;

function DriversList({ driversIds }: DriversListProps) {
  return (
    <FlatList
      style={styles.flatList}
      ItemSeparatorComponent={renderSeparator}
      data={driversIds}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    paddingTop: 10,
    paddingBottom: 20
  },
  separator: {
    flex: 1,
    paddingTop: 20
  }
});

export default DriversList;
