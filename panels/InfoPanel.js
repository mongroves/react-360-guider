import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, VrButton, asset } from 'react-360';

export default class InfoPanel extends Component{
  constructor(props) {
    super(props);
    this.state = {
      info:'https://images.pexels.com/photos/2162909/pexels-photo-2162909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
  }
  render() {
    return (
      <View style={styles.panelContainer}
        onEnter={() => this.transformDisplay(this.props.id)}
        onExit={()=>this.resetPanel(this.props.id)}
      >
        <Image source={asset('info_360.png')} style={{width:100,height:100}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  panelContainer: {
    width: 150,
    height: 150,
    flexDirection: 'column',
  }
})