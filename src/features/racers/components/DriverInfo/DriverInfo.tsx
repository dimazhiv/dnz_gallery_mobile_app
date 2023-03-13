import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useOpenLink } from '../../../../hooks/hooks';

export type DriverInfoProps = {
  url: string;
  fullName: string;
  dateOfBirth: string;
  nationality: string;
};

function DriverInfo({ url, fullName, dateOfBirth, nationality }: DriverInfoProps) {
  const handleLinkPress = useOpenLink(url);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{fullName}</Text>
      <Text style={styles.date}>{dateOfBirth}</Text>
      <Text style={styles.nationality}>{nationality}</Text>
      <TouchableOpacity onPress={handleLinkPress}>
        <Text style={styles.linkStyle} numberOfLines={1}>
          more info
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 32
  },
  date: {
    fontSize: 24
  },
  nationality: {
    fontSize: 24
  },
  linkStyle: {
    fontSize: 36,
    paddingVertical: 50,
    color: 'blue',
    textDecorationLine: 'underline'
  }
});

export default DriverInfo;
