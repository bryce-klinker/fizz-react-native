import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {COLORS} from '../../shared/styles/colors';
import {formatMinutes} from './helpers/format-timestamp';

export interface GoldenHourHeaderProps {
    minutes?: number;
    seconds?: number;
}

export const GoldenHourHeader = (props: GoldenHourHeaderProps) => {
    const {minutes, seconds} = props;
    const minutesValue = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsValue = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column', flex: 1}}>
                <Text style={{fontWeight: 'bold'}}>Golden hour</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: COLORS.muted}}>
                        {`${minutesValue}:${secondsValue}`} |
                    </Text>
                    <Text style={{color: COLORS.textDefault}}>
                        Total time: <Text style={{fontWeight: 'bold'}}>{formatMinutes(minutes, seconds)}</Text>
                    </Text>
                </View>
            </View>
            <Image source={require('../../shared/icons/profile.png')} />
        </View>
    );
};
