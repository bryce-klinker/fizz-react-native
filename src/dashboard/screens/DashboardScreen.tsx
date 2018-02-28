import * as React from 'react';
import {Component} from 'react';
import {Button, View} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import {STYLES} from '../../shared/styles';
import {Dashboard} from '../components/Dashboard';
import {DashboardModel} from '../models/dashboard.model';
import {DashboardService} from '../services/dashboard.service';

export interface DashboardScreenProps extends NavigationComponentProps {
    service?: DashboardService;
}

export interface DashboardScreenState {
    model?: DashboardModel;
}

export class DashboardScreen extends Component<DashboardScreenProps, DashboardScreenState> {
    public static Name = 'Dashboard';
    public state = { model: null };
    private service: DashboardService;

    public async componentDidMount() {
        this.service = this.props.service || new DashboardService();
        this.setState({model: await this.service.getLatest() });
    }

    public render() {
        const {model} = this.state;
        return (
            <View style={STYLES.container}>
                <Dashboard model={model} />
                <Button onPress={() => this.refresh()} title="Refresh" />
            </View>
        );
    }

    private async refresh() {
        this.setState({ model: null });
        const model = await this.service.getLatest();
        this.setState({ model });
    }
}