import * as React from 'react';
import {Image, Text, View, ViewStyle} from 'react-native';
import {iconStyle} from '../styles';
import {formatTimestamp} from './helpers/format-timestamp';
import {getBorderColor} from './helpers/get-border-color';

export interface LabsIconProps {
    timestamp?: string;
}

export const LabsIcon = (props: LabsIconProps) => {
    const {timestamp} = props;
    const style: ViewStyle = {
        ...iconStyle,
        borderColor: getBorderColor(timestamp),
        left: 20,
        position: 'absolute',
        top: 290,
    };

    return (
        <View style={style}>
            <Image source={require('../../shared/icons/labs.png')}/>
            <Text>{formatTimestamp(timestamp)}</Text>
        </View>
    );
};
