import {DashboardModel} from '../models/dashboard.model';

const FAKE_DATA: DashboardModel = {

}

export class DashboardService {
    public async getLatest(): Promise<DashboardModel> {
        await this.simulateWait();
        return FAKE_DATA;
    }

    private simulateWait(): Promise<void> {
        return new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 1000);
        })
    }
}