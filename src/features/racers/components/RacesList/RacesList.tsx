import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import RaceItem from './RaceItem';
import { RaceData } from '../../../../types/RaceData';
import { LOADING_INDICATOR_TEXT, RACES_LOADING_FAILED_MESSAGE } from '../../../../rootConstants';

export type RacesListProps = {
  races: RaceData[];
  showRacesLoading: boolean;
  racesDataLoadFailed: boolean;
};

const renderItem = ({ item }: { item: RaceData }) => <RaceItem race={item} />;

const renderSeparator = () => <View style={separator} />;

function RacesList({ races, showRacesLoading, racesDataLoadFailed }: RacesListProps) {
  return showRacesLoading ? (
    <Text>{LOADING_INDICATOR_TEXT}</Text>
  ) : racesDataLoadFailed ? (
    <Text>{RACES_LOADING_FAILED_MESSAGE}</Text>
  ) : (
    <FlatList
      style={flatList}
      ItemSeparatorComponent={renderSeparator}
      data={races}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}

const { flatList, separator } = StyleSheet.create({
  flatList: {
    paddingTop: 10,
    paddingBottom: 20
  },
  separator: {
    flex: 1,
    paddingTop: 20
  }
});

export default RacesList;
