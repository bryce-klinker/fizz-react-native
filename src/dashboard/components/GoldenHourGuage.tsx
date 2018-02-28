import * as React from 'react';
import {ProgressCircle} from 'react-native-svg-charts';
import {DashboardModel} from '../models/dashboard.model';
import {Text, View} from 'react-native';
import {COLORS} from '../../shared/styles/colors';

export interface GoldenHourGaugeProps {
    model?: DashboardModel;
}

export const GoldenHourGauge = (props: GoldenHourGaugeProps) => {
    return (
        <View>
            <Text>Golden Hour</Text>
            <ProgressCircle
                style={{height: 200}}
                progress={.25}
                progressColor={COLORS.primary}
                startAngle={-Math.PI * 0.8}
                endAngle={Math.PI * 0.8}
            />
        </View>

    )
}