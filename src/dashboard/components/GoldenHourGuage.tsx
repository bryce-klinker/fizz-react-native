import * as React from 'react';
import {Dimensions, LayoutChangeEvent, Text, View, ViewStyle} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';
import {STYLES} from '../../shared/styles';
import {COLORS} from '../../shared/styles/colors';
import {DashboardModel} from '../models/dashboard.model';
import {CheckInIcon} from './CheckinIcon';
import {CtScanIcon} from './CtScanIcon';
import {LabsIcon} from './LabsIcon';
import {GoldenHourCountDown} from './GoldenHourCountDown';
import {getMinutesSinceCheckIn} from './helpers/get-time-since-checkin';
import {CtScanReadIcon} from './CtScanReadIcon';

export interface GoldenHourGaugeProps {
    model?: DashboardModel;
}

export const GoldenHourGauge = (props: GoldenHourGaugeProps) => {
    const { model } = props;
    const progress = getMinutesSinceCheckIn(model.checkInTimestamp) / 60;
    const deviceSize = Dimensions.get('window');
    const style: ViewStyle = {
        height: deviceSize.height - 100,
        width: deviceSize.width - 100,
    };

    return (
        <View style={STYLES.container}>
            <Text>Golden Hour</Text>
            <View style={{flex: 1, alignItems: 'center'}}>
                <ProgressCircle
                    style={style}
                    progress={progress}
                    progressColor={COLORS.primary}
                    startAngle={-Math.PI * 0.8}
                    endAngle={Math.PI * 0.8}
                />
                <GoldenHourCountDown timestamp={model.checkInTimestamp}/>
                <CheckInIcon timestamp={model.checkInTimestamp}/>
                <LabsIcon timestamp={model.labsTimestamp}/>
                <CtScanIcon timestamp={model.ctScanTimestamp}/>
                <CtScanReadIcon timestamp={model.ctScanReadTimestamp}/>
            </View>
        </View>
    );
};
