import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import PeopleListItem from './PeopleListItem';

export default props => {
  const {peoples, onPressItem} = props;
  const items = peoples.map((people, index) => {
    return (
      <PeopleListItem key={index} people={people} navigateTo={onPressItem} />
    );
  });

  return <View style={styles.container}>{items}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeffff',
  },
});
