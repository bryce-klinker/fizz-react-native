import * as moment from 'moment';
import {DashboardModel} from '../models/dashboard.model';

export class DashboardService {
    public async getLatest(): Promise<DashboardModel> {
        await this.simulateWait();
        return {
            checkInTimestamp: moment().utc().subtract(23, 'minutes').toISOString(),
            // ctScanReadTimestamp: moment().utc().add(35, 'minutes').toISOString(),
            ctScanTimestamp: moment().utc().toISOString(),
            labsTimestamp: moment().utc().subtract(13, 'minutes').toISOString(),
            // tpaTimestamp: moment().utc().add(57, 'minutes').toISOString(),
        };
    }

    private simulateWait(): Promise<void> {
        return new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 1000);
        });
    }
}
