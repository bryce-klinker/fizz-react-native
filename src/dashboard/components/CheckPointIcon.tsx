import * as React from 'react';
import {Image, Text, View, ViewStyle} from 'react-native';
import {iconStyle, iconTextStyle} from '../styles';
import {formatTimestamp} from './helpers/format-timestamp';
import {getBorderColor} from './helpers/get-border-color';

export interface CheckPointIconProps {
    left?: number;
    top?: number;
    timestamp?: string;
    source?: any;
}

export const CheckPointIcon = (props: CheckPointIconProps) => {
    const { left, top, timestamp, source} = props;
    const style: ViewStyle = {
        ...iconStyle,
        borderColor: getBorderColor(timestamp),
        left,
        position: 'absolute',
        top,
    };
    const text = timestamp ? <Text style={iconTextStyle}>{formatTimestamp(timestamp)}</Text> : undefined;
    return (
        <View style={style}>
            <Image source={source} />
            {text}
        </View>
    );
}