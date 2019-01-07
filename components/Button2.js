import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { AppThemeContext } from '../context/AppThemeContext'
import themes from '../constants/themes'

export class Button2 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
    return (
      <AppThemeContext.Consumer>
        {({ handleThemeChange }) => (
          <TouchableOpacity
            style={{ backgroundColor: "green", width: 100, borderRadius: 20, alignItems: 'center' }}
            onPress={() => handleThemeChange(themes.orange)}>
            <Text> Button2 </Text>
          </TouchableOpacity>
        )}
      </AppThemeContext.Consumer>
    )
  }
}

export default Button2
