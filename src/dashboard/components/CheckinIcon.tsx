import * as React from 'react';
import {Image, Text, View, ViewStyle} from 'react-native';
import {iconStyle} from '../styles';
import {formatTimestamp} from './helpers/format-timestamp';
import {getBorderColor} from './helpers/get-border-color';

export interface CheckinIconProps {
    timestamp?: string;
}

export const CheckInIcon = (props: CheckinIconProps) => {
    const {timestamp} = props;
    const style: ViewStyle = {
        ...iconStyle,
        borderColor: getBorderColor(timestamp),
        left: 65,
        position: 'absolute',
        top: 365,
    };

    return (
        <View style={style}>
            <Image source={require('../../shared/icons/checkin.png')} />
            <Text>{formatTimestamp(timestamp)}</Text>
        </View>
    )
}