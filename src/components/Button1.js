import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import firebase from 'react-native-firebase';

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
            onPress={() => {
              handleThemeChange(themes.original)
              firebase.auth()
              .signInWithEmailAndPassword("le.khanh.duy@framgia.com", "Testabc!123")
              .then(credential => {
                if (credential) {
                  console.log('default app user ->', credential.user.toJSON());
                } else {
                  console.log("khong dung")
                }
              })
              .catch(err => {
                alert(err.message)
              });
            }}>
            <Text> Button1 </Text>
          </TouchableOpacity>
        )}
      </AppThemeContext.Consumer>
    )
  }
}

export default Button1
