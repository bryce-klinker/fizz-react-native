import * as moment from 'moment';
import * as React from 'react';
import {Text, View} from 'react-native';
import {COLORS} from '../../shared/styles/colors';
import {formatMinutes, formatTimestamp} from './helpers/format-timestamp';
import {getMinutesSinceCheckIn, getSecondsSinceCheckIn} from './helpers/get-time-since-checkin';

export interface GoldenHourCountDownProps {
    timestamp?: string;
}

export const GoldenHourCountDown = (props: GoldenHourCountDownProps) => {
    const {timestamp} = props;
    const minutesSinceArrival = getMinutesSinceCheckIn(timestamp);
    const secondsSinceArrival = getSecondsSinceCheckIn(timestamp);
    const millisecondsLeft = (1000 * 60 * 60) - ((minutesSinceArrival * 1000 * 60) + (secondsSinceArrival * 1000));
    const minutesLeft = Math.floor((millisecondsLeft / 1000 / 60));
    const secondsLeft = Math.floor((millisecondsLeft / 1000) % 60);
    return (
        <View style={{left: 110, top: 100, position: 'absolute'}}>
            <Text style={{fontWeight: 'bold', fontSize: 50}}>
                {formatMinutes(minutesLeft, secondsLeft)}
            </Text>
            <Text style={{color: COLORS.muted, fontSize: 10}}>
                Minutes since arrival:
                <Text style={{color: COLORS.textDefault, fontWeight: 'bold'}}>
                    {formatMinutes(minutesSinceArrival, secondsSinceArrival)}
                </Text>
            </Text>
        </View>
    );
};
