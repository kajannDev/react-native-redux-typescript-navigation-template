import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StatusBarHelper } from '../components/StatusBarHelper';

export class ProfileScreen extends Component<IProps, IState> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View>
                <StatusBarHelper />
                <Text>Profile Screen</Text>
            </View>
        );
    }
}


interface IProps {
}

interface IState {
}