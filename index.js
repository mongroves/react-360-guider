import React from 'react';
import Say from 'react-say';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  NativeModules,
  VrButton,
  asset
} from 'react-360';
import InfoPanel from './panels/InfoPanel';

export default class Guider extends React.Component {
  render() {
    return (
      <View style={styles.panel} />
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Guider', () => Guider);
AppRegistry.registerComponent('InfoPanel', () => InfoPanel);
