import * as React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {COLORS} from '../styles/colors';
import {containerStyle} from '../styles';

export const LoadingIndicator = () => {
    return (
        <View style={{...containerStyle, justifyContent: 'center'}}>
            <ActivityIndicator size="large" color={COLORS.primary}/>
        </View>
    );
};
