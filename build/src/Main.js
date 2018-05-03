import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppWithNavigationState from './components/AppWithNavigationState';
import { store } from './store';
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(Provider, { store: store },
            React.createElement(AppWithNavigationState, null)));
    }
}
//# sourceMappingURL=Main.js.map