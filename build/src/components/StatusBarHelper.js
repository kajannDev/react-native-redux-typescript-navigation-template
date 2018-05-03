import React, { Component } from "react";
import { View, Platform, StatusBar, StyleSheet } from "react-native";
export class StatusBarHelper extends Component {
    render() {
        return (React.createElement(View, null,
            Platform.OS === 'ios' && React.createElement(StatusBar, { barStyle: 'default' }),
            Platform.OS === 'android' && React.createElement(View, { style: styles.statusBarUnderlay })));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)'
    }
});
//# sourceMappingURL=StatusBarHelper.js.map