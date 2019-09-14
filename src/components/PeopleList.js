import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import PeopleListItem from './PeopleListItem';

export default props => {
  const {peoples, onPressItem} = props;
  return (
    <FlatList
      style={styles.container}
      data={peoples}
      renderItem={({item}) => (
        <PeopleListItem people={item} navigateTo={onPressItem} />
      )}
      keyExtractor={item => item.name.first}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeffff',
  },
});
