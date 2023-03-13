import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type DriverItemProps = {
  driverId: string;
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  onPress: (id: string) => void;
  onRacesPress: (id: string) => void;
};

function DriverItem({ driverId, fullName, dateOfBirth, nationality, onPress, onRacesPress }: DriverItemProps) {
  const handlePress = () => onPress(driverId);
  const handleRacesPress = () => onRacesPress(driverId);

  return (
    <View style={styles.container}>
      <View style={styles.nameCell}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.name}>{fullName}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dateCell}>
        <Text>{dateOfBirth}</Text>
      </View>
      <View style={styles.countryCell}>
        <Text numberOfLines={1} ellipsizeMode={'tail'}>
          {nationality}
        </Text>
      </View>
      <View style={styles.racesCell}>
        <TouchableOpacity onPress={handleRacesPress}>
          <Text style={styles.linkStyle} numberOfLines={2}>
            races
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

export default DriverItem;
