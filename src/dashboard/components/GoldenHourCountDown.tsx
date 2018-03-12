import * as React from 'react';
import {Text, View} from 'react-native';
import {COLORS} from '../../shared/styles/colors';
import {formatMinutes} from './helpers/format-timestamp';

export interface GoldenHourCountDownProps {
    minutes?: number;
    seconds?: number;
    left?: number;
    top?: number;
}

export const GoldenHourCountDown = (props: GoldenHourCountDownProps) => {
    const {seconds, minutes, left, top} = props;
    return (
        <View style={{flexDirection: 'column', left, top, position: 'absolute'}}>
            <Text style={{fontSize: 48, fontWeight: 'bold'}}>
                {formatMinutes(minutes, seconds)}
            </Text>
            <Text style={{color: COLORS.muted, fontSize: 14}}>
                Minutes since arrival
            </Text>
        </View>
    );
};
