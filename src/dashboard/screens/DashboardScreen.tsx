import * as React from 'react';
import {Component} from "react";
import {Text, View} from "react-native";

export class DashboardScreen extends Component {
    static Name = 'Dashboard';

    render () {
        return (
            <View>
                <Text>Dashboard</Text>
            </View>
        )
    }
}