import * as React from 'react';
import {Component} from "react";
import {FizzBuzz} from "../components/FizzBuzz";
import {evaluate, getCurrent} from "../fizz-buzz";
import {Button, View} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import {DashboardScreen} from "../../dashboard/screens/DashboardScreen";

export class FizzBuzzScreen extends Component<NavigationScreenProps> {
    static Name = 'FizzBuzz';

    state = {value: ''};

    async getLatest() {
        const latest = await getCurrent();
        this.setState({ value: evaluate(latest.Value) });
    }

    goToDashboard() {
        const {navigation} = this.props;
        navigation.navigate(DashboardScreen.Name);
    }

    render() {
        return (
            <View>
                <FizzBuzz getValue={() => this.getLatest()} value={this.state.value}/>
                <Button onPress={() => this.goToDashboard()} title="Dashboard"/>
            </View>
        );
    }
}