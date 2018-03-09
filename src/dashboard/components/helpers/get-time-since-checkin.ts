import * as moment from 'moment';

export function getMinutesSinceCheckIn(timestamp: string): number {
    const time = moment(timestamp);
    return Math.floor(moment().utc().diff(time) / 60000);
}

export function getSecondsSinceCheckIn(timestamp: string): number {
    const time = moment(timestamp);
    return Math.floor((moment().utc().diff(time) / 1000) % 60);
}
