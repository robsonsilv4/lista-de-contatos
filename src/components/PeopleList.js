import React from 'react';
import {View, Text} from 'react-native';

export default props => {
  const {peoples} = props;
  const textElements = peoples.map((people, index) => {
    const {first} = people.name;
    return <Text key={index}>{first}</Text>;
  });

  return <View>{textElements}</View>;
};
