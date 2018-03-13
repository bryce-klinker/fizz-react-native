export interface PatientModel {
    id?: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    status?: 'Warning' | 'Emergency' | 'Okay';
}
