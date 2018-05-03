import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StatusBarHelper } from '../components/StatusBarHelper';
export class ProfileScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(StatusBarHelper, null),
            React.createElement(Text, null, "Profile Screen")));
    }
}
//# sourceMappingURL=ProfileScreen.js.map