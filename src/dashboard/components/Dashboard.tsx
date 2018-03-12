import * as React from 'react';
import {View} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';
import {LoadingIndicator} from '../../shared/components/LoadingIndicator';
import {containerStyle} from '../../shared/styles';
import {DashboardModel} from '../models/dashboard.model';
import {Dictation} from './Dictation';
import {GoldenHourGauge} from './GoldenHourGuage';

export interface DashboardProps {
    model?: DashboardModel;
    isDictating?: boolean;
    dictationTime?: number;
}

export const Dashboard = (props: DashboardProps) => {
    const { model, isDictating, dictationTime } = props;

    if (!model) {
        return <LoadingIndicator />;
    }

    return (
        <View style={containerStyle}>
            <View style={{flex: 0.8}}>
                <GoldenHourGauge model={model} />
            </View>
            <Dictation isDictating={isDictating} dictationTime={dictationTime} />
        </View>
    );
};
