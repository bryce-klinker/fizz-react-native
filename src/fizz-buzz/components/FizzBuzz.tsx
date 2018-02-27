import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export interface FizzBuzzProps {
  getValue?: () => void;
  value?: string;
}

export const FizzBuzz = (props: FizzBuzzProps) => {
  const { getValue, value } = props;
  return (
      <View>
          <Button title="FizzBuzz" testID="FizzBuzz" onPress={getValue || function(){}}/>
          <Text testID="FizzBuzzLabel">{value}</Text>
      </View>
  );
};
