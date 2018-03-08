import * as React from 'react';
import {Image, View} from 'react-native';

export interface IconProps {
    name: string;
}

export const Icon = (props: IconProps) => {
    const sourcePath = `../icons/${props.name}`;
    const source = require(sourcePath);
    return (
        <View>
            <Image source={source} />
        </View>
    );
};
