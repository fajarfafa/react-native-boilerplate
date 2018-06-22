import { StyleSheet } from 'react-native'

let viewStyle = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
  },
  fullFlex: {
    flex: 1
  }
})
let textStyle = StyleSheet.create({
  alignCenter: {
    flex: 1,
    textAlign: 'center'
  },
  vAlignCenter: {
    flex: 1,
    textAlignVertical: 'center'
  }
})
export {
  viewStyle,
  textStyle
}