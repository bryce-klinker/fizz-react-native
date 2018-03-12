import {COLORS} from '../../../shared/styles/colors';

export function getColorFromTimestamp(timestamp: string): string {
    return timestamp ? COLORS.primary : COLORS.muted;
}
