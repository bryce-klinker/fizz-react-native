import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';
import {COLORS} from '../../shared/styles/colors';
import {DashboardModel} from '../models/dashboard.model';

export interface GoldenHourGaugeProps {
    model?: DashboardModel;
}

export const GoldenHourGauge = (props: GoldenHourGaugeProps) => {
    const { model } = props;
    const progress = ((Date.now() - Date.parse(model.checkInTimestamp)) / 60000) / 60;
    return (
        <View>
            <Text>Golden Hour</Text>
            <View>
                <Image source={require('../../shared/icons/checkin.png')}/>
                <Text>{model.checkInTimestamp}</Text>
            </View>
            <ProgressCircle
                style={{height: 200}}
                progress={progress}
                progressColor={COLORS.primary}
                startAngle={-Math.PI * 0.8}
                endAngle={Math.PI * 0.8}
            />
        </View>
    );
};
