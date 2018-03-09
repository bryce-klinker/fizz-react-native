import * as React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import {NavigationComponentProps } from 'react-native-navigation';
import {containerStyle} from '../../shared/styles';
import {FizzBuzz} from '../components/FizzBuzz';
import {evaluate, getCurrent} from '../fizz-buzz';

export class FizzBuzzScreen extends Component<NavigationComponentProps> {
    public static Name = 'FizzBuzz';

    public state = {value: ''};

    public async getLatest() {
        const latest = await getCurrent();
        this.setState({ value: evaluate(latest.Value) });
    }

    public render() {
        return (
            <View style={containerStyle}>
                <FizzBuzz getValue={() => this.getLatest()} value={this.state.value}/>
            </View>
        );
    }
}
