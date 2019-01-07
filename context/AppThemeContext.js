import React, { Component } from 'react'
import { Text, View } from 'react-native'

import themes from '../constants/themes'

export const AppThemeContext = React.createContext("ahihi");

export class AppThemeProvider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       theme: themes.original
    }
  }
  
  handleThemeChange = (value) => {
    this.setState({
      theme: value
    })
  }

  render() {
    return (
      <AppThemeContext.Provider
        value={{
          theme: this.state.theme,
          handleThemeChange: this.handleThemeChange
        }}>
        {this.props.children}
      </AppThemeContext.Provider>
    )
  }
}

