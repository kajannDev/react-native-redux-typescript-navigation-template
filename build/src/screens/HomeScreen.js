import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StatusBarHelper } from '../components/StatusBarHelper';
export class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(StatusBarHelper, null),
            React.createElement(Text, null, "Home Screen")));
    }
}
//# sourceMappingURL=HomeScreen.js.map