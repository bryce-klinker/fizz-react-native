import * as React from 'react';
import {Dimensions, Image, Text, View, ViewStyle} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';
import {COLORS} from '../../shared/styles/colors';
import {DashboardModel} from '../models/dashboard.model';

export interface GoldenHourGaugeProps {
    model?: DashboardModel;
}

export const GoldenHourGauge = (props: GoldenHourGaugeProps) => {
    const { model } = props;
    const progress = ((Date.now() - Date.parse(model.checkInTimestamp)) / 60000) / 60;
    const style: ViewStyle = {
        height: Dimensions.get('window').height - 100,
        width: Dimensions.get('window').width - 100,
    };

    return (
        <View >
            <Text>Golden Hour</Text>
            <View style={{flex: 1, alignItems: 'center'}}>
                <ProgressCircle
                    style={style}
                    progress={progress}
                    progressColor={COLORS.primary}
                    startAngle={-Math.PI * 0.8}
                    endAngle={Math.PI * 0.8}
                />
                <View style={{left: 65, top: 365, position: 'absolute'}}>
                    <Image source={require('../../shared/icons/checkin.png')} style={{borderRadius: 10, borderColor: COLORS.primary, borderWidth: 2}}/>
                    <Text>{model.checkInTimestamp}</Text>
                </View>
            </View>
        </View>
    );
};
