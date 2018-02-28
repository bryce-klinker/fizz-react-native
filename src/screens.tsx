import {Navigation} from 'react-native-navigation';
import {DashboardScreen} from './dashboard/screens/DashboardScreen';
import {FizzBuzzScreen} from './fizz-buzz/screens/FizzBuzzScreen';

export const APP_NAME = 'fizzreactnative';

export function registerScreens() {
    Navigation.registerComponent(`${APP_NAME}.${FizzBuzzScreen.Name}`, () => FizzBuzzScreen);
    Navigation.registerComponent(`${APP_NAME}.${DashboardScreen.Name}`, () => DashboardScreen);
}
