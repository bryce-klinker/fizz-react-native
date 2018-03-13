import * as React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import {containerStyle} from '../../shared/styles';
import {PatientList} from '../components/PatientList';
import {PatientModel} from '../models/patient.model';
import {PatientsService} from '../services/patients.service';
import {APP_NAME} from '../../screens';
import {DashboardScreen} from './DashboardScreen';
import {SearchParametersModel} from '../models/search-parameters.model';

export interface PatientsScreenProps extends NavigationComponentProps {
    service?: PatientsService;
}

export interface PatientsScreenState {
    patients?: PatientModel[];
    searchParameters?: SearchParametersModel;
}

export class PatientsScreen extends Component<PatientsScreenProps, PatientsScreenState> {
    public static Name = 'Patients';
    public state = { patients: [], searchParameters: { term: '' } };
    private service: PatientsService;

    public async componentDidMount() {
        this.service = this.props.service || new PatientsService();
        const patients = await this.service.getPatients();
        this.setState({patients});
    }

    public render() {
        const {patients, searchParameters} = this.state;
        return (
            <View style={{...containerStyle, flexDirection: 'row'}}>
                <PatientList patients={patients}
                             searchParameters={searchParameters}
                             onSearchChanged={(p) => this.onSearchParametersChanged(p)}
                             onTouched={(p) => this.onPatientTouched(p)}/>
            </View>
        );
    }

    private onPatientTouched(patient: PatientModel): void {
        this.props.navigator.push({
            animated: true,
            screen: `${APP_NAME}.${DashboardScreen.Name}`,
            title: `${patient.lastName}, ${patient.firstName}`,
        });
    }

    private onSearchParametersChanged(parameters: SearchParametersModel) {
        this.setState({ searchParameters: parameters });
    }
}
