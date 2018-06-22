/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { Platform, FlatList, StyleSheet, ListView, TouchableOpacity } from 'react-native'
import { Content, Container, Button, Spinner, Text, View, Card, CardItem, Body, Thumbnail, Left } from 'native-base'
import InitialActions from './redux/initial'
import { connect } from 'react-redux'
import API from './services/api'
import { viewStyle, textStyle } from './style'
class App extends React.Component {
  componentDidMount() {
    this.props.initialGet()
  }

  render() {
    return (
      <Container style={viewStyle.fullFlex}>
        <FlatList
          style={viewStyle.fullFlex}
          refreshing={this.props.initial.refresh}
          onRefresh={() => {
            if (this.props.initial.page <= this.props.initial.total_pages)
              this.props.initialGet({ action: 'next', page: this.props.initial.page + 1 })
          }}
          keyExtractor={(item, index) => item.id}
          data={this.props.initial.data}
          data={[]}
          onEndReachedThreshold={0.001}
          onEndReached={(info) => {
            if (this.props.initial.page <= this.props.initial.total_pages)
              this.props.initialGet({ action: 'next', page: this.props.initial.page + 1 })
          }}
          ListFooterComponent={() => {
            return this.props.initial.fetching
              ? <Spinner />
              : null
          }}
          ListEmptyComponent={() => {
            return (
              <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <Text style={viewStyle.fullFlex}>sadsa</Text>
              </View>
            )
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={[viewStyle.center]}>
                <Card>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{ uri: item.avatar }} />
                      <Body>
                        <Text>{`${item.first_name} ${item.last_name}`}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            )
          }}
        />
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
