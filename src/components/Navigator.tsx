import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, TabNavigatorConfig, NavigationRouteConfigMap } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import  {
    HomeScreen,
    ProfileScreen,
    SearchScreen,
    SettingsScreen
} from '../screens'

const routeConfig: NavigationRouteConfigMap = {
    Home: { screen: HomeScreen, },
    Profile: { screen: ProfileScreen },
    Search: { screen: SearchScreen },
    Settings: { screen: SettingsScreen }
}

const tabBarConfig: TabNavigatorConfig = {
    navigationOptions: ({ navigation }) => ({
        header: null,
        tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state;
            let iconName;
            switch (routeName) {
                case 'Home':
                    iconName = Platform.OS === 'ios'
                        ? `ios-home${focused ? '' : '-outline'}` : 'md-home';
                break;
                case 'Search':
                    iconName = Platform.OS === 'ios' 
                        ? `ios-search${focused ? '' : '-outline'}` : 'md-search';
                break;
                case 'Settings':
                    iconName = Platform.OS === 'ios' 
                        ? `ios-settings${focused ? '' : '-outline'}` : 'md-settings';
                break;
                case 'Profile':
                    iconName = Platform.OS === 'ios' 
                        ? `ios-person${focused ? '' : '-outline'}` : 'md-person';
                break;
            }
            return (<Ionicons name={iconName} size={25} color='black' />)
        }
    }),
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: {
            backgroundColor: 'gray'
        }
    }
}

export const Navigator = TabNavigator(routeConfig, tabBarConfig);
