import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PhotoComponent from '../../features/gallery/components/Photo/PhotoContainer';

function Photo() {
  return (
    <SafeAreaView style={styles.container}>
      <PhotoComponent />
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
export default Photo;
