import * as React from 'react';
import {Image, TextInput, View, ViewStyle} from 'react-native';
import {SearchParametersModel} from '../models/search-parameters.model';
import {COLORS} from '../../shared/styles/colors';

export interface PatientSearchProps {
    parameters?: SearchParametersModel;
    onParametersChanged?: (parameters: SearchParametersModel) => void;
}

export const PatientSearch = (props: PatientSearchProps) => {
    const {parameters, onParametersChanged} = props;
    const style: ViewStyle = {
        alignItems: 'stretch',
        borderBottomColor: COLORS.muted,
        borderBottomWidth: 1,
        flex: 0.15,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        margin: 0,
    };

    return (
        <View style={style}>
            <TextInput value={parameters.term}
                       style={{fontSize: 24, flex: 1, borderRightColor: COLORS.muted, borderRightWidth: 1}}
                       placeholder="Search..."
                       placeholderTextColor={COLORS.muted}
                       onChangeText={(text) => onParametersChanged({...parameters, term: text})}
            />
            <Image style={{height: 25, width: 25, margin: 20}} source={require('../../shared/icons/filter.png')} />
        </View>
    );
};
