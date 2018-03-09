import * as React from 'react';
import {Image, Text, View, ViewStyle} from 'react-native';
import {iconStyle} from '../styles';
import {formatTimestamp} from './helpers/format-timestamp';
import {getBorderColor} from './helpers/get-border-color';

export interface CtScanIconProps {
    timestamp?: string;
}

export const CtScanIcon = (props: CtScanIconProps) => {
    const {timestamp} = props;
    const style: ViewStyle = {
        ...iconStyle,
        borderColor: getBorderColor(timestamp),
        left: 35,
        position: 'absolute',
        top: 190,
    };

    return (
        <View style={style}>
            <Image source={require('../../shared/icons/ct-scan.png')}/>
            <Text>{formatTimestamp(timestamp)}</Text>
        </View>
    )
}