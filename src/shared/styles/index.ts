import { StyleSheet } from 'react-native';
import {COLORS} from './colors';

export const STYLES = StyleSheet.create({
    centered: {
        alignItems: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
    },
    primaryColor: {
        color: COLORS.primary,
    },
});
