import React, {Component} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './SquareButton.style';
import PropTypes from 'prop-types';

const SquareButton = props => {
  return (
    <TouchableHighlight
      style={styles.SquareButton}
      testId="SquareButton"
      onPress={() => console.log(props.text)}>
      <>
        <Text>squareButton</Text>
        {props.children}
      </>
    </TouchableHighlight>
  );
};

SquareButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default SquareButton;
