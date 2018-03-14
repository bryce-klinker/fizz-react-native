import * as React from 'react';
import {View} from 'react-native';
import {Size} from '../../shared/models/size';
import {DashboardModel} from '../models/dashboard.model';
import {CheckPointIcon} from './CheckPointIcon';
import {toRadians} from './helpers/convert-degrees-to-radians';

interface GoldenHourCheckPointsProps {
    model?: DashboardModel;
    gaugeSize?: Size;
    x?: number;
    y?: number;
    startAngle?: number;
    endAngle?: number;
}

export const GoldenHourCheckPoints = (props: GoldenHourCheckPointsProps) => {
    const {model, x, y, gaugeSize: { height, width}} = props;
    const centerPoint = { x: x - 15, y: y - 70};
    const radius = Math.min(height, width) + 10;
    return (
        <View style={{flex: 1}}>
            <CheckPointIcon timestamp={model.checkInTimestamp}
                            source={require('../../shared/icons/checkin.png')}
                            top={centerPoint.y + (radius * Math.sin(toRadians(130)))}
                            left={centerPoint.x + (radius * Math.cos(toRadians(130)))}
            />

            <CheckPointIcon timestamp={model.labsTimestamp}
                            source={require('../../shared/icons/labs.png')}
                            top={centerPoint.y + (radius * Math.sin(toRadians(180)))}
                            left={centerPoint.x + (radius * Math.cos(toRadians(180)))}
            />

            <CheckPointIcon timestamp={model.ctScanTimestamp}
                            source={require('../../shared/icons/ct-scan.png')}
                            top={centerPoint.y + (radius * Math.sin(toRadians(230)))}
                            left={centerPoint.x + (radius * Math.cos(toRadians(230)))}
            />
            <CheckPointIcon timestamp={model.ctScanReadTimestamp}
                            source={require('../../shared/icons/ct-scan-read.png')}
                            top={centerPoint.y + (radius * Math.sin(toRadians(275)))}
                            left={centerPoint.x + (radius * Math.cos(toRadians(275)))}
            />

            <CheckPointIcon timestamp={model.ctScanReadTimestamp}
                            source={require('../../shared/icons/tpa.png')}
                            top={centerPoint.y + (radius * Math.sin(toRadians(300)))}
                            left={centerPoint.x + (radius * Math.cos(toRadians(300)))}
            />
        </View>
    );
};
