import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {FizzBuzz} from "./fizz-buzz/components/FizzBuzz";
import {evaluate, getCurrent} from "./fizz-buzz/fizz-buzz";
import {StackNavigator} from "react-navigation";
import {FizzBuzzScreen} from "./fizz-buzz/screens/FizzBuzzScreen";

const RootStack = StackNavigator({
        [FizzBuzzScreen.Name]: { screen: FizzBuzzScreen }
    },
    {
        initialRouteName: FizzBuzzScreen.Name
    })

export const App = () => {
    return (
        <View style={styles.container}>
            <RootStack />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
