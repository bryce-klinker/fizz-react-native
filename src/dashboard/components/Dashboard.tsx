import * as React from 'react';
import {View} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';
import {LoadingIndicator} from '../../shared/components/LoadingIndicator';
import {containerStyle} from '../../shared/styles';
import {DashboardModel} from '../models/dashboard.model';
import {GoldenHourGauge} from './GoldenHourGauge';
import {PostProcedure} from './PostProcedure';
import {GoldenHourHeader} from './GoldenHourHeader';
import {getMinutesSinceCheckIn, getSecondsSinceCheckIn} from './helpers/get-time-since-checkin';

export interface DashboardProps {
    model?: DashboardModel;
}

export const Dashboard = (props: DashboardProps) => {
    const { model } = props;

    if (!model) {
        return <LoadingIndicator />;
    }

    const minutesSinceArrival = getMinutesSinceCheckIn(model.checkInTimestamp);
    const secondsSinceArrival = getSecondsSinceCheckIn(model.checkInTimestamp);
    return (
        <View style={containerStyle}>
            <View style={{flex: 0.1, zIndex: -1}}>
                <GoldenHourHeader minutes={minutesSinceArrival}
                                  seconds={secondsSinceArrival}
                />
            </View>
            <View style={{flex: 0.8}}>
                <GoldenHourGauge model={model} />
            </View>
            <View style={{flex: 0.2}}>
                <PostProcedure />
            </View>
        </View>
    );
};
