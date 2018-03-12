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
        const checkpoints = this.getCheckpoints();
        const dimensions = Dimensions.get('window');
        const gaugeSize = { width: dimensions.width, height: (dimensions.height / 2) - 35};

        return (
            <View style={{...containerStyle, flex: 1}}>
                <GoldenHourHeader minutes={minutesSinceArrival}
                                  seconds={secondsSinceArrival}
                />
                <View style={{flex: 1, alignItems: 'center', flexDirection: 'column', paddingTop: 15}}>
                    <View ref="ProgressCircle" onLayout={() => this.onLayout()}>
                        <ProgressCircle
                            style={gaugeSize}
                            progress={progress}
                            progressColor={COLORS.primary}
                            startAngle={startAngle}
                            endAngle={endAngle}
                        />
                    </View>
                    <GoldenHourCountDown left={gaugeSize.width / 2 - 75}
                                         top={gaugeSize.height / 2 - 35}
                                         minutes={minutesSinceArrival}
                                         seconds={secondsSinceArrival}
                    />
                    { checkpoints }
                </View>
            </View>
        );
    }

    private onLayout() {
        const progressCircle: any = this.refs.ProgressCircle;
        progressCircle.measure((x, y, width, height, pageX, pageY) => {
            this.setState({
                progressCircleHeight: height,
                progressCircleWidth: width,
                progressCircleX: pageX,
                progressCircleY: pageY,
            });
        });
    }

    private getCheckpoints() {
        if (!this.hasGauge) {
            return undefined;
        }

        const { model } = this.props;
        return <GoldenHourCheckPoints model={model}
                                      x={this.state.progressCircleX}
                                      y={this.state.progressCircleY}
              />;
    }
}
