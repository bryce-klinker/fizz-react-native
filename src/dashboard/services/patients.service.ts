import {PatientModel} from '../models/patient.model';

export class PatientsService {
    private patients: PatientModel[];

    constructor() {
        this.patients = [
            { firstName: 'Billy', lastName: 'Bob', id: '1', dateOfBirth: '1987-09-23', status: 'Emergency'},
            { firstName: 'Doe', lastName: 'Joe', id: '2', dateOfBirth: '1977-06-07', status: 'Warning'},
            { firstName: 'Smith', lastName: 'Jack', id: '3', dateOfBirth: '1967-08-23', status: 'Okay'},
        ];
    }

    public getPatients(): Promise<PatientModel[]> {
        return Promise.resolve(this.patients);
    }

    public getPatient(id: string): Promise<PatientModel> {
        return Promise.resolve(this.patients.find((p) => p.id === id));
    }
}
