/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { Platform, StyleSheetTouchableOpacity } from 'react-native'
import { Content, Container, Button, Text, View } from 'native-base'
import InitialActions from './redux/inital'
import { connect } from 'react-redux'
class App extends React.Component {
  render() {
    return (
      <Container>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Count : {this.props.initial.count}</Text>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Button onPress={this.props.countDecrement} style={{ margin: 2 }}><Text>-</Text></Button>
            <Button onPress={this.props.countIncrement} style={{ margin: 2 }}><Text>+</Text></Button>
          </View>
        </View>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initial: state.initial
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    countDecrement: () => { dispatch(InitialActions.countDecrement()) },
    countIncrement: () => { dispatch(InitialActions.countIncrement()) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
