import {COLORS} from '../../../shared/styles/colors';

export function getBorderColor(timestamp: string): string {
    return timestamp ? COLORS.primary : COLORS.muted;
}
