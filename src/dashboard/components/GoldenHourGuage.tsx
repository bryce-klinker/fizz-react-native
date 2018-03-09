import * as React from 'react';
import {Text, View} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';
import {containerStyle} from '../../shared/styles';
import {COLORS} from '../../shared/styles/colors';
import {DashboardModel} from '../models/dashboard.model';
import {CheckPointIcon} from './CheckPointIcon';
import {GoldenHourCountDown} from './GoldenHourCountDown';
import {getMinutesSinceCheckIn} from './helpers/get-time-since-checkin';
import {TotalTime} from './TotalTime';

export interface GoldenHourGaugeProps {
    model?: DashboardModel;
}

export const GoldenHourGauge = (props: GoldenHourGaugeProps) => {
    const { model } = props;
    const progress = getMinutesSinceCheckIn(model.checkInTimestamp) / 60;
    return (
        <View style={{...containerStyle}}>
            <Text>Golden Hour</Text>
            <View style={{flex: 1, alignItems: 'center'}}>
                <ProgressCircle
                    style={{height: 300, width: 300}}
                    progress={progress}
                    progressColor={COLORS.primary}
                    startAngle={-Math.PI * 0.8}
                    endAngle={Math.PI * 0.8}
                />
                <GoldenHourCountDown timestamp={model.checkInTimestamp}/>
                <CheckPointIcon timestamp={model.checkInTimestamp}
                                source={require('../../shared/icons/checkin.png')}
                                top={240}
                                left={50}
                />

                <CheckPointIcon timestamp={model.labsTimestamp}
                                source={require('../../shared/icons/labs.png')}
                                top={150}
                                left={5}
                />

                <CheckPointIcon timestamp={model.ctScanTimestamp}
                                source={require('../../shared/icons/ct-scan.png')}
                                top={35}
                                left={40}
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
