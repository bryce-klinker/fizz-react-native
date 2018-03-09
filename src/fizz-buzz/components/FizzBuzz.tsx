import * as React from 'react';
import { Button, Text, View } from 'react-native';
import {centered} from '../../shared/styles';

export interface FizzBuzzProps {
  getValue?: () => void;
  value?: string;
}

export const FizzBuzz = (props: FizzBuzzProps) => {
  const { value } = props;
  const getValue = props.getValue || (() => {});
  return (
      <View style={centered}>
          <Button title="FizzBuzz" testID="FizzBuzzButton" onPress={getValue}/>
          <Text testID="FizzBuzzLabel">{value}</Text>
      </View>
  );
};
