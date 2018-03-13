import {PatientModel} from '../models/patient.model';
import {Text, View, TouchableHighlight} from 'react-native';
import * as React from 'react';
import {COLORS} from '../../shared/styles/colors';
import moment = require('moment');

export interface PatientProps {
    patient?: PatientModel;
    onTouched?: (patient: PatientModel) => void;
}

function getStatusColor(status: string) {
    switch (status) {
        case 'Warning':
            return COLORS.warning;
        case 'Emergency':
            return COLORS.emergency;
        default:
            return COLORS.muted;
    }
}

export const Patient = (props: PatientProps) => {
    const {patient, onTouched} = props;
    const dob = moment(patient.dateOfBirth);
    const month = dob.get('month') < 10 ? `0${dob.get('month')}` : `${dob.get('month')}`;
    const day = dob.get('day') < 10 ? `0${dob.get('day')}` : `${dob.get('day')}`;
    const year = dob.get('year');
    return (
        <TouchableHighlight onPress={() => onTouched(patient)}>
            <View style={{padding: 15, height: 100, width: 110, flexDirection: 'column', borderWidth: 1, borderColor: COLORS.muted}}>
                <View style={{height: 2, width: 30, backgroundColor: getStatusColor(patient.status)}}></View>
                <Text style={{flex: 1, fontWeight: 'bold', fontSize: 14}}>
                    {`${patient.lastName}, ${patient.firstName}`}
                </Text>
                <Text style={{color: COLORS.muted}}>
                    {`${month}.${day}.${year}`}
                </Text>
            </View>
        </TouchableHighlight>
    );
};
