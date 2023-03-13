import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Photos from '../../features/gallery/components/Photos/PhotosContainer';

function Gallery() {
  return (
    <SafeAreaView style={styles.container}>
      <Photos />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tinyLogo: {
    width: 300,
    height: 300
  }
});
export default Gallery;
