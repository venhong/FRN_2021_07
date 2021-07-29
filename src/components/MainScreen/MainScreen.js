import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TouchableHighlight} from 'react-native';
import {IMG_FORM, IMG_LOGO} from '../../../src/App/ressources/images';
import SquareButton from '../../App/components/SquareButton/SquareButton';
import styles from './MainScreen.style';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('MainScreen');
    return (
      <View>
        <View>
          <Text style={styles.appName}>Mon APP</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={{
              uri: IMG_LOGO,
            }}
            style={styles.logo}
          />
        </View>
        <SquareButton
          text="Nouveau"
          onPress={() => {
            console.log('click');
          }}>
          <Image
            style={styles.button}
            source={{
              uri: IMG_FORM,
            }}
          />
        </SquareButton>
      </View>
    );
  }
}

export default MainScreen;
