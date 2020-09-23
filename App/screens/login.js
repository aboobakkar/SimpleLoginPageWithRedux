import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  SafeAreaView,
  Dimensions,
  Alert
} from 'react-native'
import { connect } from 'react-redux'
import { actions, States } from '../store'
import { Button } from '../components'

const { width, height } = Dimensions.get('window');
/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor(props) {
    super(props)

		// init local state
    this.state = {
      username: 'hruday@gmail.com',
      password: 'hruday123'
    }
  }

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    };

  render() {
    const { loading, doLogin } = this.props

    if (loading) {
      return <ActivityIndicator />
		}
		
		// display login screen
    return (
        <>
        <SafeAreaView style={{ flex: 0 }} />
        <View style={styles.container}>
            <Text style={styles.text}>Username</Text>
            <TextInput
                style = {styles.textInput}
                onChangeText={username => this.setState({ username }, ()=>{
                  if (!this.validateEmail(this.state.username)) {
                      Alert.alert('Invalid email')}
                    }
                  )}
                value={this.state.username}
            />
            <Text style={styles.text}>Password</Text>
            <TextInput
                style = {styles.textInput}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
            />
            <Button
                onPress={() => {
                    doLogin(this.state.username, this.state.password)
            }}
            >
            Login
            </Button>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  textInput: {
    fontSize: 16,
    //width: width * 0.9,
    height: 35,
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 2,
    marginTop: '2%' ,
    textAlignVertical: 'top' //android only
  },
  text: {
    fontSize: 16,
    color: '#323031',
    marginTop: '5%' 
 }
})

/**
 * Login screen.
 */
export const Login = connect(
	
	// map states
  (state: States) => ({
		
		// props.loading -> modules.app.loading
    loading: state.app.loading
	}),
	
	// map actions
  dispatch => ({

		// props.doLogin -> modules.login.login()
    doLogin: (username, password) =>
      dispatch(actions.user.login(username, password))
  })
)(App)

