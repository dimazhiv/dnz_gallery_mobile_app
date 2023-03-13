import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

export type PhotoItemProps = {
  uri: string;
  onPress: (id: string) => void;
};

function PhotoItem({ uri, onPress }: PhotoItemProps) {
  const handlePhotoPress = () => {
    onPress(uri);
  };

  return (
    <TouchableOpacity onPress={handlePhotoPress}>
      <Image source={{ uri: uri }} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300
  }
});

export default PhotoItem;
