import {TextStyle, ViewStyle} from 'react-native';
import {COLORS} from './colors';

export const containerStyle: ViewStyle = {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
};

export const centered: ViewStyle = {
    alignItems: 'center',
};

export const primaryColorStyle: TextStyle = {
    color: COLORS.primary,
};
