import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { AppThemeContext } from '../context/AppThemeContext'
import themes from '../constants/themes'

export class Button1 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
    return (
      <AppThemeContext.Consumer>
        {({ theme, handleThemeChange }) => (
          <TouchableOpacity
            style={{ backgroundColor: "green", width: 100, borderRadius: 20, alignItems: 'center' }}
            onPress={() => handleThemeChange(themes.original)}>
            <Text> Button1 </Text>
          </TouchableOpacity>
        )}
      </AppThemeContext.Consumer>
    )
  }
}

export default Button1
