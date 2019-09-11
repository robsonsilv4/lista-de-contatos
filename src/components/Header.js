import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default props => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
    backgroundColor: '#64b5f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: '#fff',
  },
});
