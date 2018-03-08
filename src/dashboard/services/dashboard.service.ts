import {DashboardModel} from '../models/dashboard.model';

const oneMinuteInSeconds = 60000;
export class DashboardService {
    public async getLatest(): Promise<DashboardModel> {
        await this.simulateWait();
        return {
            checkInTimestamp: new Date(Date.now() - (oneMinuteInSeconds * 23)).toISOString(),
            ctScanReadTimestamp: new Date(Date.now() + (oneMinuteInSeconds * 35)).toISOString(),
            ctScanTimestamp: new Date(Date.now()).toISOString(),
            labsTimestamp: new Date(Date.now() - (oneMinuteInSeconds * 13)).toISOString(),
            tpaTimestamp: new Date(Date.now() + (oneMinuteInSeconds * 57)).toISOString(),
        };
    }

    private simulateWait(): Promise<void> {
        return new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 1000);
        });
    }
}
