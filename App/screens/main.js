import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { actions, States } from '../store'
import { Login } from './login'
import { Button } from '../components'
import EmployeeData from '../util/json/EmployeeData.json'
import Employee from './employee'
/**
 * Main component. Display greeting when user is logged in,
 * otherwise it will display the login screen.
 * 
 * @class App
 * @extends {Component}
 */
class App extends Component {

  render() {
    const { doLogout, loggedIn, fullName } = this.props

		// Display login screen when user is not logged in
    if (!loggedIn) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Appiness</Text>
          <Login />
        </View>
      )
    }

		// Display greeting with user full name displayed
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome {fullName}!</Text>
        <Button
          onPress={() => {
            doLogout()
          }}
        >
          Logout
        </Button>
        
        <FlatList
          showsVerticalScrollIndicator={false}
          data={EmployeeData}
          renderItem={({ item }) => (
            <Employee
                data={item}
            />
          )}
          keyExtractor={item => item.name}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    fontSize: 16,
    color: '#323031',
    alignSelf:'center'
 },
 item: {
  backgroundColor: '#f9c2ff',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
})

export const Main = connect(

	// inject states to props
  (state: States) => ({
    loggedIn: state.user.loggedIn,
    fullName: state.user.fullName
	}),
	
	// inject actions to props
  dispatch => ({
    doLogout: () => dispatch(actions.user.logout())
  })
)(App)