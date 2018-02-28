import * as React from 'react';
import {View} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';
import {LoadingIndicator} from '../../shared/components/LoadingIndicator';
import {DashboardModel} from '../models/dashboard.model';
import {GoldenHourGauge} from './GoldenHourGuage';

export interface DashboardProps {
    model?: DashboardModel;
}

export const Dashboard = (props: DashboardProps) => {
    const { model } = props;

    if (!model) {
        return <LoadingIndicator />;
    }

    return (
        <View>
            <GoldenHourGauge model={model} />
        </View>
    );
};
