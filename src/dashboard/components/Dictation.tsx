import * as React from 'react';
import {Text, View} from 'react-native';

export interface DictationProps {
    isDictating?: boolean;
    dictationTime?: number;
}

export const Dictation = (props: DictationProps) => {
    const {isDictating, dictationTime} = props;
    return (
        <View style={{flex: 0.3, alignItems: 'center', justifyContent: 'center'}}>
            { isDictating ? <Text>{Math.round(dictationTime)}</Text> : null }
        </View>
    );
};
