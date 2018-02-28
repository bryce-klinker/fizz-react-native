import * as React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {COLORS} from '../styles/colors';

export const LoadingIndicator = () => {
    return (
        <View>
            <ActivityIndicator size="large" color={COLORS.primary}/>
        </View>
    );
};
