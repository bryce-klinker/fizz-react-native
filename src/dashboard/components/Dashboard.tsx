import * as React from 'react';
import {View} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';
import {LoadingIndicator} from '../../shared/components/LoadingIndicator';
import {containerStyle} from '../../shared/styles';
import {DashboardModel} from '../models/dashboard.model';
import {Dictation} from './Dictation';
import {GoldenHourGauge} from './GoldenHourGuage';
import {ThrombectomyGauge} from './ThrombectomyGuage';

export interface DashboardProps {
    model?: DashboardModel;
    isDictating?: boolean;
}

export const Dashboard = (props: DashboardProps) => {
    const { model, isDictating } = props;

    if (!model) {
        return <LoadingIndicator />;
    }

    return (
        <View style={containerStyle}>
            <GoldenHourGauge model={model} />
            <ThrombectomyGauge timestamp={model.thrombectomyTimestamp}/>
            <Dictation isDictating={isDictating} />
        </View>
    );
};
