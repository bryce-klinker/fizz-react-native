import * as React from 'react';
import {View} from 'react-native';
import {Size} from '../../shared/models/size';
import {DashboardModel} from '../models/dashboard.model';
import {CheckPointIcon} from './CheckPointIcon';

interface GoldenHourCheckPointsProps {
    model?: DashboardModel;
    gaugeSize?: Size;
    x?: number;
    y?: number;
    startAngle?: number;
    endAngle?: number;
}

export const GoldenHourCheckPoints = (props: GoldenHourCheckPointsProps) => {
    const {model, x, y} = props;
    return (
        <View>
            <CheckPointIcon timestamp={model.checkInTimestamp}
                            source={require('../../shared/icons/checkin.png')}
                            top={-y + 15}
                            left={x - 100}
            />

            <CheckPointIcon timestamp={model.labsTimestamp}
                            source={require('../../shared/icons/labs.png')}
                            top={-y - 85}
                            left={x - 160}
            />

            <CheckPointIcon timestamp={model.ctScanTimestamp}
                            source={require('../../shared/icons/ct-scan.png')}
                            top={-y - 225}
                            left={x - 100}
            />
            <CheckPointIcon timestamp={model.ctScanReadTimestamp}
                            source={require('../../shared/icons/ct-scan-read.png')}
                            top={-y - 235}
                            left={x + 50}
            />

            <CheckPointIcon timestamp={model.ctScanReadTimestamp}
                            source={require('../../shared/icons/tpa.png')}
                            top={-y - 160}
                            left={x + 115}
            />
        </View>
    );
};
