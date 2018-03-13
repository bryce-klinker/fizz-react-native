import * as React from 'react';
import {View} from 'react-native';
import {PatientModel} from '../models/patient.model';
import {Patient} from './Patient';
import {PatientSearch} from './PatientSearch';
import {SearchParametersModel} from '../models/search-parameters.model';

export interface PatientListProps {
    searchParameters?: SearchParametersModel;
    patients?: PatientModel[];
    onTouched?: (patient: PatientModel) => void;
    onSearchChanged?: (parameters: SearchParametersModel) => void;
}

export const PatientList = (props: PatientListProps) => {
    const {patients, searchParameters, onTouched, onSearchChanged} = props;

    const patientElements = patients
        .filter((p) => p.firstName.includes(searchParameters.term) || p.lastName.includes(searchParameters.term))
        .map((p) => <Patient key={p.id}
                                       patient={p}
                                       onTouched={onTouched}
                             />);
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <PatientSearch parameters={searchParameters}
                           onParametersChanged={onSearchChanged}
            />
            <View style={{flex: 1, flexDirection: 'row'}}>
                {patientElements}
            </View>
        </View>
    );
};