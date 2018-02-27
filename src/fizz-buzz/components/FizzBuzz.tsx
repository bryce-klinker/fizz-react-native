import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export interface FizzBuzzProps {
  getValue?: () => void;
  value?: string;
}

export class FizzBuzz extends React.Component<FizzBuzzProps> {
  render() {
    const { getValue, value } = this.props;
    return (
      <View style={styles.container}>
        <Button title="FizzBuzz" testID="FizzBuzz" onPress={getValue || function(){}}/>
        <Text testID="FizzBuzzLabel">{value}</Text>
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
