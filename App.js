import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from 'axios';

import Header from './src/components/Header';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: [],
    };
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?nat=br&results=5').then(response => {
      const {results} = response.data;
      this.setState({
        peoples: results,
      });
    });
  }

  renderList() {
    return this.state.peoples.map((people, index) => {
      const {first} = people.name;
      return <Text key={index}>{first}</Text>;
    });
  }

  render() {
    return (
      <View>
        <Header title="Lista de Contatos" />
        {this.renderList()}
      </View>
    );
  }
}
