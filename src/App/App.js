import React, {Component} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import MainScreen from '../components/MainScreen/MainScreen';

class App extends Component {
  counter = 0;
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }
  compomentDidUpdate() {
    console.log("une mise à jour d'etat a ete effectuer", this.state);
  }
  render() {
    console.log('Chargement');
    return (
      <View>
        <MainScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
