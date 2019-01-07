import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

import { AppThemeContext } from '../context/AppThemeContext'
import Button1 from './Button1'
import Button2 from './Button2'

export class Theme extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isUpdate: false
    }
  }

  render() {
    return (
      <AppThemeContext.Consumer>
        {({theme, handleThemeChange}) => (
          <View style={[styles.container, {backgroundColor: theme}]}>
            <Button1 />
            <Button2 />
          </View>
      )}
      </AppThemeContext.Consumer>
    )
  }
}

export default Theme

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent: 'space-around',
  },
});