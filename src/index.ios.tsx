import {AppRegistry} from "react-native";
import { Navigation } from 'react-native-navigation';
import {DashboardScreen} from './dashboard/screens/DashboardScreen';
import {FizzBuzzScreen} from './fizz-buzz/screens/FizzBuzzScreen';
import {APP_NAME, registerScreens} from './screens';

AppRegistry.registerComponent('fizzreactnative', () => FizzBuzzScreen);

// registerScreens();
//
// Navigation.startTabBasedApp({
//     tabs: [
//         {
//             label: 'FizzBuzz',
//             screen: `${APP_NAME}.${FizzBuzzScreen.Name}`,
//             title: 'FizzBuzz',
//         },
//         {
//             label: 'Dashboard',
//             screen: `${APP_NAME}.${DashboardScreen.Name}`,
//             title: 'Dashboard',
//         },
//     ],
// });
