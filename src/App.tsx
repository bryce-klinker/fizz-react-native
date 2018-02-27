import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {FizzBuzz} from "./fizz-buzz/components/FizzBuzz";
import {evaluate, getCurrent} from "./fizz-buzz/fizz-buzz";

export default class App extends React.Component {
    state = { value: '' };

    async getLatest() {
        const latest = await getCurrent();
        this.setState({ value: evaluate(latest.Value) });
    }

    render() {
        return (
            <View style={styles.container}>
                <FizzBuzz getValue={() => this.getLatest()} value={this.state.value}/>
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
