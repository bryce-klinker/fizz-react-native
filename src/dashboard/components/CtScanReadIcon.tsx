import * as React from 'react';
import {Image, Text, View, ViewStyle} from 'react-native';
import {iconStyle} from '../styles';
import {formatTimestamp} from './helpers/format-timestamp';
import {getBorderColor} from './helpers/get-border-color';

export interface CtScanReadIconProps {
    timestamp?: string;
}

export const CtScanReadIcon = (props: CtScanReadIconProps) => {
    const {timestamp} = props;
    const style: ViewStyle = {
        ...iconStyle,
        borderColor: getBorderColor(timestamp),
        left: 200,
        position: 'absolute',
        top: 130,
    };

    return (
        <View style={style}>
            <Image source={require('../../shared/icons/ct-scan-read.png')}/>
            <Text>{formatTimestamp(timestamp)}</Text>
        </View>
    )
};
