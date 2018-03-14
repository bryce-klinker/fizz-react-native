import * as React from 'react';
import {Dimensions,  View} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';
import {containerStyle} from '../../shared/styles';
import {COLORS} from '../../shared/styles/colors';
import {DashboardModel} from '../models/dashboard.model';
import {GoldenHourCheckPoints} from './GoldenHourCheckpoints';
import {GoldenHourCountDown} from './GoldenHourCountDown';
import {GoldenHourHeader} from './GoldenHourHeader';
import {getMinutesSinceCheckIn, getSecondsSinceCheckIn} from './helpers/get-time-since-checkin';
import {TotalTime} from './TotalTime';
import {PostProcedure} from './PostProcedure';

export interface GoldenHourGaugeProps {
    model?: DashboardModel;
}

export interface GoldenHourGaugeState {
    progressCircleX: number;
    progressCircleY: number;
    progressCircleHeight: number;
    progressCircleWidth: number;
}

const startAngle = -Math.PI * 0.8;
const endAngle = Math.PI * 0.8;

export class GoldenHourGauge extends React.PureComponent<GoldenHourGaugeProps, GoldenHourGaugeState> {
    public state = { progressCircleX: 0, progressCircleY: 0, progressCircleHeight: 0, progressCircleWidth: 0 };

    public get hasGauge(): boolean {
        return this.state.progressCircleY !== 0
            || this.state.progressCircleX !== 0;
    }

    public render() {
        const { model } = this.props;
        const minutesSinceArrival = getMinutesSinceCheckIn(model.checkInTimestamp);
        const secondsSinceArrival = getSecondsSinceCheckIn(model.checkInTimestamp);
        const progress = getMinutesSinceCheckIn(model.checkInTimestamp) / 60;
        const dimensions = Dimensions.get('window');
        const gaugeSize = { width: dimensions.width, height: (dimensions.height / 2)};
        const centerPoint = { x: gaugeSize.width / 2 - 75, y: gaugeSize.height / 2 - 55 };
        return (
            <View style={{...containerStyle, alignItems: 'center'}}>
                <ProgressCircle
                    style={gaugeSize}
                    progress={progress}
                    progressColor={COLORS.primary}
                    startAngle={startAngle}
                    endAngle={endAngle}
                />
                <GoldenHourCountDown left={centerPoint.x}
                                     top={centerPoint.y}
                                     minutes={minutesSinceArrival}
                                     seconds={secondsSinceArrival}
                />
                <GoldenHourCheckPoints model={model}
                                       gaugeSize={gaugeSize}
                />
            </View>
        );
    }
}
