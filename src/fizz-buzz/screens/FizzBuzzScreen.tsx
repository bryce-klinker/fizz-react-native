import * as React from 'react';
import {Component} from 'react';
import {Button, View} from 'react-native';
import {NavigationComponentProps } from 'react-native-navigation';
import {DashboardScreen} from '../../dashboard/screens/DashboardScreen';
import {APP_NAME} from '../../screens';
import {FizzBuzz} from '../components/FizzBuzz';
import {evaluate, getCurrent} from '../fizz-buzz';

export class FizzBuzzScreen extends Component<NavigationComponentProps> {
    public static Name = 'FizzBuzz';

    public state = {value: ''};

    public async getLatest() {
        const latest = await getCurrent();
        this.setState({ value: evaluate(latest.Value) });
    }

    public goToDashboard() {
        const {navigator} = this.props;
        navigator.push({
            screen: `${APP_NAME}.${DashboardScreen.Name}`,
            title: DashboardScreen.Name,
        });
    }

    public render() {
        return (
            <View>
                <FizzBuzz getValue={() => this.getLatest()} value={this.state.value}/>
                <Button onPress={() => this.goToDashboard()} title="Dashboard"/>
            </View>
        );
    }
}
