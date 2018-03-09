import {TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../shared/styles/colors';

export const iconStyle: ViewStyle = {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderRadius: 20,
    borderWidth: 2,
    height: 40,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 40,
};

export const iconTextStyle: TextStyle = {
    color: COLORS.muted,
    fontSize: 10,
};
