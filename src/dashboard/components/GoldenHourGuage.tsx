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
    const deviceSize = Dimensions.get('window');
    const style: ViewStyle = {
        height: deviceSize.height - 100,
        width: deviceSize.width - 100,
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
                <View style={{left: 150, top: 250, position: 'absolute'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 28}}>HERE</Text>
                    <Text>Minutes since arrival</Text>
                </View>
                <View style={{left: 65, top: 365, position: 'absolute'}}>
                    <Image source={require('../../shared/icons/checkin.png')} style={{borderRadius: 10, borderColor: COLORS.primary, borderWidth: 2}}/>
                    <Text>{model.checkInTimestamp}</Text>
                </View>
            </View>
        </View>
    );
};
