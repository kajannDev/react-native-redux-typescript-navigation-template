import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StatusBarHelper } from '../components/StatusBarHelper';
export class SearchScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(StatusBarHelper, null),
            React.createElement(Text, null, "Search Screen")));
    }
}
//# sourceMappingURL=SearchScreen.js.map