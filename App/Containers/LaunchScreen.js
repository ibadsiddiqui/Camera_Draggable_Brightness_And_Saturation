import React, { Component } from 'react'
import { TouchableHighlight, Text, Image, View } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <TouchableHighlight onPress={this.props.navigation.navigate('CameraScreen')}>
          <Text>Click for camera</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
