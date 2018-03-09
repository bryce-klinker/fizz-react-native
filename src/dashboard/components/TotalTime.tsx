import * as React from 'react';
import {Text, View} from 'react-native';
import {COLORS} from '../../shared/styles/colors';

export const TotalTime = () => {
    return (
        <View style={{top: -50, alignItems: 'center', alignContent: 'center'}}>
            <Text><Text style={{fontSize: 18, fontWeight: 'bold'}}>90</Text>min</Text>
            <Text style={{fontSize: 9, color: COLORS.muted}}>Total Time</Text>
        </View>
    );
};
