import { StackNavigator } from 'react-navigation'
import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import rootRedux from '../redux'
import App from '../App'

const RootNav = StackNavigator({
  App: App
})

const containerRoot = { flex: 1 }
export default class Navigator extends Component {
  render() {
    return (
      <Provider store={rootRedux()}>
        <View style={containerRoot}>
          <RootNav />
        </View>
      </Provider>
    )

  }
}

