import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import PhotoItem from './PhotoItem/PhotoItemContainer';

export type PhotosProps = {
  uris: string[];
};

const renderItem = ({ item }: { item: string }) => <PhotoItem uri={item} />;

const renderSeparator = () => <View style={styles.separator} />;

function Photos({ uris }: PhotosProps) {
  return (
    <FlatList
      contentContainerStyle={styles.flatList}
      ItemSeparatorComponent={renderSeparator}
      data={uris}
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

export default Photos;
