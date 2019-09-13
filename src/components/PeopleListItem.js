import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {capitalizeFirstLetter} from '../utils/capitalizeFirstLetter';

export default props => {
  const {title, first, last} = props.people.name;
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.line}>
        <Image
          style={styles.avatar}
          source={{uri: props.people.picture.thumbnail}}
        />
        <Text style={styles.lineText}>{`${capitalizeFirstLetter(
          title,
        )} ${first} ${last}`}</Text>
      </View>
    </TouchableOpacity>
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
    flex: 7,
  },
  avatar: {
    flex: 1,
    aspectRatio: 1, // Mater proporção
    marginLeft: 15,
    borderRadius: 50,
  },
});
