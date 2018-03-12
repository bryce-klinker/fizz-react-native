import * as React from 'react';
import {Text, View} from 'react-native';
import {COLORS} from '../../shared/styles/colors';

export const PostProcedure = () => {
    return (
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', borderWidth: 1, borderColor: COLORS.textDefault, padding: 15}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Post Procedure</Text>
            <Text style={{color: COLORS.muted}}>00:00</Text>
        </View>
    );
};
