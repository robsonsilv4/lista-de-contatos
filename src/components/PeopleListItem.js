import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {capitalizeFirstLetter} from '../utils/capitalizeFirstLetter';

export default props => {
  const {title, first, last} = props.people.name;
  return (
    <View style={styles.line}>
      <Text style={styles.lineText}>{`${capitalizeFirstLetter(
        title,
      )} ${first} ${last}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
  },
});
