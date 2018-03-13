import {Navigation} from 'react-native-navigation';
import {DashboardScreen} from './dashboard/screens/DashboardScreen';
import {FizzBuzzScreen} from './fizz-buzz/screens/FizzBuzzScreen';
import {PatientsScreen} from './dashboard/screens/PatientsScreen';

export const APP_NAME = 'fizzreactnative';

export function registerScreens() {
    Navigation.registerComponent(`${APP_NAME}.${FizzBuzzScreen.Name}`, () => FizzBuzzScreen);
    Navigation.registerComponent(`${APP_NAME}.${PatientsScreen.Name}`, () => PatientsScreen);
    Navigation.registerComponent(`${APP_NAME}.${DashboardScreen.Name}`, () => DashboardScreen);
}
