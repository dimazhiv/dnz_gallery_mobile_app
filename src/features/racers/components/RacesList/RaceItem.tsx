import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useOpenLink } from '../../../../hooks/hooks';
import { RaceData } from '../../../../types/RaceData';

export type RaceItemProps = {
  race: RaceData;
};

function RaceItem({ race }: RaceItemProps) {
  const { raceName, date, finalPosition, url } = race;
  const handleLinkPress = useOpenLink(url);

  return (
    <View style={styles.container}>
      <View style={styles.nameCell}>
        <Text style={styles.name}>{raceName}</Text>
      </View>
      <View style={styles.dateCell}>
        <Text>{date}</Text>
      </View>
      <View style={styles.countryCell}>
        <Text numberOfLines={1} ellipsizeMode={'tail'}>
          {finalPosition}
        </Text>
      </View>
      <View style={styles.racesCell}>
        <TouchableOpacity onPress={handleLinkPress}>
          <Text style={styles.linkStyle} numberOfLines={2}>
            info
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row'
  },
  nameCell: {
    padding: 10,
    width: 100
  },
  dateCell: {
    padding: 10,
    width: 110
  },
  countryCell: {
    padding: 10,
    width: 100
  },
  racesCell: {
    padding: 10,
    minWidth: 60
  },
  name: {
    color: 'blue',
    fontWeight: 'bold'
  },
  linkStyle: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
});

export default RaceItem;
