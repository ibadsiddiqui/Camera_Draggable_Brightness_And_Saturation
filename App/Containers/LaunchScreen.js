import React, { Component } from 'react'
import {Screen} from '@shoutem/ui'
import Camera from 'react-native-camera';
import { Surface } from "gl-react";
// Styles
import Saturate from './Saturation'
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  constructor(){
    super();
    this.state = {
      width: null,
      height: null
    }
  }
  componentWillUpdate() {
    clearInterval(this.timer);
  }
  refreshPic = () =>{
    this.camera.capture({
      target: Camera.constants.CaptureTarget.temp,
      jpegQuality: 70
    }).then( data => this.setState({
      path: data.path
    })).catch( err => console.error (err));
  }
  start(){
    this.timer = setInterval(()=> this.refreshPic(), 5)
  }
  onLayout = (ev) =>{
    const {width, height} = ev.nativeEvent.layout;
    this.setState({
      width,  height
    });
    this.start()
  }
  render () {
    const {width, height} = this.state;
    const filter = {
      contrast: 1,
      saturation: 1,
      brightness: 1
    }
    if (width && height) {
      return (    
        <Screen onLayout={this.onLayout}>
          <Camera style={{flex: 1}}
                  ref={cam => this.camera = cam}
                  aspect={Camera.constants.Aspect.fill}>
            <Surface style={{width, height}}>
              
              <Saturate {...filter}>
                {{uri: 'http://i.imgur.com/uTp9Xfr.jpg'}}
              </Saturate>
                  
            </Surface>
          </Camera>  
        </Screen>
      )
    }else{
      return (
          <Screen onLayout={this.onLayout} />
      );
    }
  }
}
