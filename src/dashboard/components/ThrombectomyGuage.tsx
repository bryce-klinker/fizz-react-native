import * as React from 'react';
import {Image, ImageStyle, Text, View, ViewStyle} from 'react-native';
import {COLORS} from '../../shared/styles/colors';
import {iconStyle} from '../styles';

export interface ThrombectomyGaugeProps {
    timestamp?: string;
}

export const ThrombectomyGauge = (props: ThrombectomyGaugeProps) => {
    const imageStyle: ViewStyle = {
        ...iconStyle,
        alignItems: 'center',
        borderColor: COLORS.accent,
    };
    return (
        <View style={{flex: 0.2}}>
            <Text style={{color: COLORS.muted}}>Thrombectomy</Text>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 3, backgroundColor: COLORS.accent}} />
                <View style={imageStyle}>
                    <Image source={require('../../shared/icons/thrombectomy.png')} />
                </View>
                <View style={{flex: 1, height: 3, backgroundColor: COLORS.muted }} />
                <Text style={{paddingLeft: 5}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>90</Text>min
                </Text>
            </View>
        </View>
    );
};
