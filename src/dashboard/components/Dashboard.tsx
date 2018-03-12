import * as React from 'react';
import {View} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';
import {LoadingIndicator} from '../../shared/components/LoadingIndicator';
import {containerStyle} from '../../shared/styles';
import {DashboardModel} from '../models/dashboard.model';
import {Dictation} from './Dictation';
import {GoldenHourGauge} from './GoldenHourGauge';
import {PostProcedure} from './PostProcedure';

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
            <View style={{flex: 0.7}}>
                <GoldenHourGauge model={model} />
            </View>
            <View style={{flex: 0.2, marginTop: 15}}>
                <PostProcedure />
            </View>
            <View style={{flex: 0.1}}>
                <Dictation isDictating={isDictating} dictationTime={dictationTime} />
            </View>
        </View>
    );
};
