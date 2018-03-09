import * as React from 'react';
import {Text, View} from 'react-native';

export const TotalTime = () => {
    return (
        <View style={{top: -50, alignItems: 'center', alignContent: 'center'}}>
            <Text><Text style={{fontSize: 18, fontWeight: 'bold'}}>90</Text>min</Text>
            <Text>Total Time</Text>
        </View>
    );
};
