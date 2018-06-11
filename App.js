/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { Platform, StyleSheetTouchableOpacity } from 'react-native'
import { Content, Container, Button, Text, View } from 'native-base'
import InitialActions from './redux/initial'
import { connect } from 'react-redux'
import API from './services/api'
class App extends React.Component {
  componentDidMount() {
    this.props.initialGet()
  }
  render() {
    return (
      <Container>
        <Content>
          <Text>
            {JSON.stringify(this.props.initial, null, 2)}
          </Text>
        </Content>
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
    countIncrement: () => { dispatch(InitialActions.countIncrement()) },
    initialGet: (config) => { dispatch(InitialActions.initialGet(config)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
