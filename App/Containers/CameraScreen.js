import React, { Component } from 'react'
import {Screen} from '@shoutem/ui'
import Camera from 'react-native-camera';
// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  constructor(){
    super();
    this.state = {
      width: null,
      height: null
    }
  }
  onLayout(ev){
    const {width, height} = ev.nativeEvent.layout;
    this.setState({
      width,  height
    });
  }  
  render () {
    const {width, height} = this.state;
    return (
      
      <Screen onLayout={this.onLayout}>
        <Camera style={{flex: 1}}
                ref={cam => this.camera = cam}
                aspect={Camera.constants.Aspect.fill}>
        </Camera>  

      </Screen>
    )
  }
}