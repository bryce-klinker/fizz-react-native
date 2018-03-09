import * as React from 'react';
import {Component} from 'react';
import {Button, View} from 'react-native';
import { AudioRecorder, AudioUtils } from 'react-native-audio';
import {NavigationComponentProps} from 'react-native-navigation';
import {containerStyle} from '../../shared/styles';
import {Dashboard} from '../components/Dashboard';
import {DashboardModel} from '../models/dashboard.model';
import {DashboardService} from '../services/dashboard.service';

export interface DashboardScreenProps extends NavigationComponentProps {
    service?: DashboardService;
}

export interface DashboardScreenState {
    model?: DashboardModel;
    isDictating?: boolean;
}

export class DashboardScreen extends Component<DashboardScreenProps, DashboardScreenState> {
    public static Name = 'Dashboard';
    public state = { model: null, isDictating: false };
    private service: DashboardService;

    public async componentDidMount() {
        this.service = this.props.service || new DashboardService();
        this.setState({model: await this.service.getLatest() });
    }

    public render() {
        const {model, isDictating} = this.state;
        const dictation = !isDictating ? 'Dictate' : 'Stop';
        return (
            <View style={containerStyle}>
                <Dashboard model={model} isDictating={isDictating} />
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Button onPress={() => this.refresh()} title="Refresh" />
                    <Button onPress={() => this.toggleDictation()} title={dictation} />
                </View>
            </View>
        );
    }

    private async refresh() {
        this.setState({ model: null });
        const model = await this.service.getLatest();
        this.setState({ model });
    }

    private async toggleDictation() {
        const {isDictating} = this.state;
        this.setState({isDictating: !isDictating });

        this.prepareRecording();
        await isDictating ? this.stopDictation() : this.startDictation();
    }

    private prepareRecording() {
        const audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';
        AudioRecorder.prepareRecordingAtPath(audioPath, {
            AudioEncoding: 'aac',
            AudioEncodingBitRate: 32000,
            AudioQuality: 'Low',
            Channels: 1,
            SampleRate: 22050,
        });

        AudioRecorder.onProgress = (data) => {
            console.log(data);
        };
        AudioRecorder.onFinished = () => {
            console.log('Finished');
        }
    }

    private async startDictation() {
        await AudioRecorder.startRecording();
    }

    private async stopDictation() {
        await AudioRecorder.stopRecording();
    }
}
