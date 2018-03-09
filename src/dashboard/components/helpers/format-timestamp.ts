import * as moment from 'moment';

export function formatTimestamp(timestamp: string): string {
    const date = moment(timestamp);
    return formatMinutes(date.get('hour'), date.get('minute'));
}

export function formatMinutes(minutes: number, seconds: number): string {
    const minutesValue = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsValue = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutesValue}:${secondsValue}`;
}
