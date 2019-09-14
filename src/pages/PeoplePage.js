import React, {Component} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import axios from 'axios';

import PeopleList from '../components/PeopleList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: [],
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    setTimeout(() => {
      axios
        .get('https://randomuser.me/api/?nat=br&results=150')
        .then(response => {
          const {results} = response.data;
          this.setState({
            peoples: results,
            loading: false,
          });
        })
        .catch(error => {
          this.setState({error: true, loading: false});
        });
    });
  }

  renderPage() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#64b5f6" />;
    }

    if (this.state.error) {
      return <Text style={styles.error}>Ops... algo deu errado.</Text>;
    }

    return (
      <PeopleList
        peoples={this.state.peoples}
        onPressItem={pageParams => {
          this.props.navigation.navigate('PeopleDetail', pageParams);
        }}
      />
    );
  }

  render() {
    return <View style={styles.container}>{this.renderPage()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center',
  },
});
