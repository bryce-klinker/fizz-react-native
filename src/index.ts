import { Navigation } from 'react-native-navigation';
import {DashboardScreen} from './dashboard/screens/DashboardScreen';
import {FizzBuzzScreen} from './fizz-buzz/screens/FizzBuzzScreen';
import {APP_NAME, registerScreens} from './screens';
import {PatientsScreen} from './dashboard/screens/PatientsScreen';

registerScreens();

Navigation.startTabBasedApp({
    tabs: [
        // {
        //     icon: require('./shared/icons/times.png'),
        //     label: 'FizzBuzz',
        //     screen: `${APP_NAME}.${FizzBuzzScreen.Name}`,
        //     title: 'FizzBuzz',
        // },
        {
            icon: require('./shared/icons/patients.png'),
            label: 'Patients',
            screen: `${APP_NAME}.${PatientsScreen.Name}`,
            title: 'Patients',
        },
    ],
});
