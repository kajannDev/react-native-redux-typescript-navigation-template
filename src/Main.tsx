import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { App } from './components/AppWithNavigationState';
import { store } from './store';

export default class Main extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
        }
    }

    public componentDidMount(): void {
    }

    public render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

interface IProps {
}
interface IState {
}