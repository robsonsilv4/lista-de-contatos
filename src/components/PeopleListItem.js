import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default props => {
  const {first, last} = props.people.name;
  return (
    <View style={styles.line}>
      <Text style={styles.lineText}>{`${first} ${last}`}</Text>
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
