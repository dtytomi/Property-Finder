/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PropertyFinder extends Component {
  render() {
    return (
      <Navigator styles={styles.container}
        initialRoute = {{
          component: HelloWorld,
           title: 'Property Finder' 
        }}
        renderScene={(route, navigator) => 
          <Text>{route.title}</Text>
        } />
    );
  }
}

class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Hello World!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
