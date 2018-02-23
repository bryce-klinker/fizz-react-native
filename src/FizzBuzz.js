import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    const { getValue } = this.props;
    return (
      <View style={styles.container}>
        <Button title="FizzBuzz" onPress={getValue || function(){}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
