import React, { Component } from "react";
import { View, Platform, StatusBar, StyleSheet } from "react-native";

export class StatusBarHelper extends Component<any, any> {
    render() {
        return (
            <View>
                {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
                {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
            </View>
        );
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
    