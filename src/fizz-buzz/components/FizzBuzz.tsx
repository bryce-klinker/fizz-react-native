import * as React from 'react';
import { Button, Text, View } from 'react-native';
import {STYLES} from '../../shared/styles';

export interface FizzBuzzProps {
  getValue?: () => void;
  value?: string;
}

export const FizzBuzz = (props: FizzBuzzProps) => {
  const { value } = props;
  const getValue = props.getValue || (() => {});
  return (
      <View style={STYLES.centered}>
          <Button title="FizzBuzz" testID="FizzBuzz" onPress={getValue}/>
          <Text testID="FizzBuzzLabel">{value}</Text>
      </View>
  );
};
