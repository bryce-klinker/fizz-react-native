import * as React from 'react';
import {View} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';
import {LoadingIndicator} from '../../shared/components/LoadingIndicator';
import {DashboardModel} from '../models/dashboard.model';
import {GoldenHourGauge} from './GoldenHourGuage';
import {STYLES} from '../../shared/styles';

export interface DashboardProps {
    model?: DashboardModel;
}

export const Dashboard = (props: DashboardProps) => {
    const { model } = props;

    if (!model) {
        return <LoadingIndicator />;
    }

    return (
        <View style={STYLES.container}>
            <GoldenHourGauge model={model} />
        </View>
    );
};
