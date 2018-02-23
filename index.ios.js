import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import FizzBuzz from './src/components/FizzBuzz.js';

class App extends Component {
    render() {
        return <FizzBuzz />
    }
}
AppRegistry.registerComponent('react-native-app', () => App);
