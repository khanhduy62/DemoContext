
import React, { Component } from 'react'
import { StyleSheet, Platform, Button, Text, View } from 'react-native'
import firebase from 'react-native-firebase'

export default class Main extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      currentUser: null
    }
  }
  
  componentDidMount() {
    const { currentUser } = firebase.auth()

    this.setState({ currentUser })
  }

  handleSingOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.props.navigation.navigate('Main'))
  }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button title="SignOut" onPress={this.handleSingOut} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})