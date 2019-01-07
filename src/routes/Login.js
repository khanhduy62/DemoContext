import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'react-native-firebase'

import { AppThemeContext } from '../context/AppThemeContext'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: 'le.khanh.duy@framgia.com',
      password: 'Testabc!123'
    }
  }

  state = { email: '', password: '', errorMessage: null }

  // handleLogin = () => {
  //   const { email, password } = this.state
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(() => this.props.navigation.navigate('Main'))
  //     .catch(error => this.setState({ errorMessage: error.message }))

  // }

  render() {
    return (
      <AppThemeContext.Consumer>
        {({ handleLogin, error }) => (
          <View style={styles.container}>
            <Text>Login</Text>
            {error &&
              <Text style={{ color: 'red' }}>
                {error}
              </Text>}
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Email"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              secureTextEntry
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Password"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <Button
              title="Login"
              disabled={!this.state.email || !this.state.password}
              onPress={() => handleLogin(this.state.email, this.state.password, this.props.navigation)} />
          </View>

        )}
      </AppThemeContext.Consumer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})