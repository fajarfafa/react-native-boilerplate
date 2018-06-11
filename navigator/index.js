import { StackNavigator } from 'react-navigation'
import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import FCM, { FCMEvent } from 'react-native-fcm'
import rootRedux from '../redux'
import App from '../App'
const RootNav = StackNavigator(
  {
    App: App
  }, {
    navigationOptions: {
      header: null
    },
    initialRouteKey: 'App'
  })

const containerRoot = { flex: 1 }
export default class Navigator extends Component {
  componentDidMount() {
    FCM.getInitialNotification().then(notifInit => {
      FCM.on(FCMEvent.Notification, notif => {
      })
    })
  }
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

