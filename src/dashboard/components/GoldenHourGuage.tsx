import * as React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';
import {containerStyle} from '../../shared/styles';
import {COLORS} from '../../shared/styles/colors';
import {DashboardModel} from '../models/dashboard.model';
import {CheckPointIcon} from './CheckPointIcon';
import {GoldenHourCountDown} from './GoldenHourCountDown';
import {getMinutesSinceCheckIn, getSecondsSinceCheckIn} from './helpers/get-time-since-checkin';
import {TotalTime} from './TotalTime';
import {formatMinutes} from './helpers/format-timestamp';
import {GoldenHourHeader} from './GoldenHourHeader';

export interface GoldenHourGaugeProps {
    model?: DashboardModel;
}

export const GoldenHourGauge = (props: GoldenHourGaugeProps) => {
    const { model } = props;
    const minutesSinceArrival = getMinutesSinceCheckIn(model.checkInTimestamp);
    const secondsSinceArrival = getSecondsSinceCheckIn(model.checkInTimestamp);
    const progress = getMinutesSinceCheckIn(model.checkInTimestamp) / 60;
    const dimensions = Dimensions.get('window');
    const gaugeStyle = { width: dimensions.width, height: (dimensions.height / 2) - 35};
    const radius = Math.min(gaugeStyle.height, gaugeStyle.width) / 2;
    const angle = Math.PI * 0.8;
    return (
        <View style={{...containerStyle, flex: 1}}>
            <GoldenHourHeader minutes={minutesSinceArrival}
                              seconds={secondsSinceArrival}
            />
            <View style={{flex: 1, alignItems: 'center', flexDirection: 'column'}}>
                <ProgressCircle
                    style={gaugeStyle}
                    progress={progress}
                    progressColor={COLORS.primary}
                    startAngle={-angle}
                    endAngle={angle}
                />
                <GoldenHourCountDown left={gaugeStyle.width / 2 - 75}
                                     top={gaugeStyle.height / 2 - 35}
                                     minutes={minutesSinceArrival}
                                     seconds={secondsSinceArrival}
                />
                <CheckPointIcon timestamp={model.checkInTimestamp}
                                source={require('../../shared/icons/checkin.png')}
                                top={radius * Math.sin(angle)}
                                left={gaugeStyle.width / 5}
                />

                <CheckPointIcon timestamp={model.labsTimestamp}
                                source={require('../../shared/icons/labs.png')}
                                top={gaugeStyle.height - 150}
                                left={gaugeStyle.width / 32}
                />

                <CheckPointIcon timestamp={model.ctScanTimestamp}
                                source={require('../../shared/icons/ct-scan.png')}
                                top={gaugeStyle.height - 250}
                                left={gaugeStyle.width / 24}
                />
                <CheckPointIcon timestamp={model.ctScanReadTimestamp}
                                source={require('../../shared/icons/ct-scan-read.png')}
                                top={-10}
                                left={200}
                />

                <CheckPointIcon timestamp={model.ctScanReadTimestamp}
                                source={require('../../shared/icons/tpa.png')}
                                top={20}
                                left={260}
                />
                <TotalTime />
            </View>
        </View>
    );
};
