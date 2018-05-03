import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StatusBarHelper } from '../components/StatusBarHelper';

export class SearchScreen extends Component<IProps, IState> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View>
                <StatusBarHelper />
                <Text>Search Screen</Text>
            </View>
        );
    }
}


interface IProps {
}

interface IState {
}