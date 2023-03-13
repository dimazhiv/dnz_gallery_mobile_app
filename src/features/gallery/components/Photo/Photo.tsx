import React from 'react';
import { Image, StyleSheet } from 'react-native';

export type PhotoProps = {
  uri: string;
};

function Photo({ uri }: PhotoProps) {
  return <Image source={{ uri: uri }} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300
  }
});

export default Photo;
