import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'react-native-firebase'

import themes from '../constants/themes'

export const AppThemeContext = React.createContext("ahihi");

export class AppThemeProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
  }

  handleLogin = (email, password, navigation) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Main'))
      .catch(error => {
        console.log("error ", error)
        this.setState({ error: error.message })}
        )
  }

  render() {
    return (
      <AppThemeContext.Provider
        value={{  
          error: this.state.error,
          handleLogin: this.handleLogin
      }}>
        {this.props.children}
      </AppThemeContext.Provider>
    )
  }
}

