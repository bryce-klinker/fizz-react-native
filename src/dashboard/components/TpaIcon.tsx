import * as React from 'react';
import {Image, Text, View, ViewStyle} from 'react-native';
import {iconStyle} from '../styles';
import {formatTimestamp} from './helpers/format-timestamp';
import {getBorderColor} from './helpers/get-border-color';

export interface TpaIconProps {
    timestamp?: string;
}

export const TpaIcon = (props: TpaIconProps) => {
    const {timestamp} = props;
    const style: ViewStyle = {
        ...iconStyle,
        borderColor: getBorderColor(timestamp),
        left: 260,
        position: 'absolute',
        top: 170,
    };

    return (
        <View style={style}>
            <Image source={require('../../shared/icons/tpa.png')}/>
            <Text>{formatTimestamp(timestamp)}</Text>
        </View>
    );
};
