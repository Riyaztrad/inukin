import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CONSTANT from '../constants'
import {
    LoginScreen,
    HomeScreen,
    OtpScreen,
    ForgotScreen,
    SignupScreen,
    SplashScreen,
    ProfileScreen,
    ProfileAccountScreen,
    ProfileFollowScreen,
    EditScreen,
    NotificationScreen,
    ScoreScreen
} from '../screens';

import CustomTabBar from '../components/CustomTabBar';


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{ tabBarIcon: () => (<Image  source={CONSTANT.App.staticImages.home} />) }} />
            <Tab.Screen name="Scores" component={ScoreScreen} />
            <Tab.Screen name="Edits" component={EditScreen} />
            <Tab.Screen name="Bells" component={NotificationScreen} />
            <Tab.Screen name="Profiles" component={ProfileScreen} />
        </Tab.Navigator>
    );
}


const Drawer = createDrawerNavigator();
function DrawerStack() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                component={MyTabs}
                name='TabStack'
            />
        </Drawer.Navigator>
    );
};



const Stack = createStackNavigator();
function AppStackNavigator() {
    return (

        <Stack.Navigator headerMode="none">
            <Stack.Screen
                name="Home"
                component={DrawerStack}
            />
            <Stack.Screen
                component={ProfileScreen}
                name={CONSTANT.App.screenNames.profile}
                initialParams={{ profile: true }}
            />
            <Stack.Screen
                component={ProfileAccountScreen}
                name={CONSTANT.App.screenNames.profileAccount}
                initialParams={{ account: true }}
            />
            <Stack.Screen
                component={ProfileFollowScreen}
                name={CONSTANT.App.screenNames.profileFollow}
                initialParams={{ follow: true }}
            />
            <Stack.Screen
                component={NotificationScreen}
                name={CONSTANT.App.screenNames.notification}
                initialParams={{ follow: true }}
            />
            <Stack.Screen
                component={ScoreScreen}
                name={CONSTANT.App.screenNames.score}
                initialParams={{ follow: true }}
            />
            <Stack.Screen
                component={EditScreen}
                name={CONSTANT.App.screenNames.edit}
                initialParams={{ follow: true }}
            />

        </Stack.Navigator>
    )
}

const Auth = createStackNavigator();
function AuthNavigator() {
    return (
        <Auth.Navigator headerMode="none">

            <Auth.Screen
                component={LoginScreen}
                name={CONSTANT.App.screenNames.login}
            />
            <Auth.Screen component={SignupScreen}
                name={CONSTANT.App.screenNames.signup}
            />
            <Auth.Screen component={OtpScreen}
                name={CONSTANT.App.screenNames.otp}
            />
            <Auth.Screen component={ForgotScreen}
                name={CONSTANT.App.screenNames.forgot} />
        </Auth.Navigator>
    );
}
const Splash = createStackNavigator();

function SplashNavigator() {
    return (
        <Splash.Navigator headerMode="none">
            <Stack.Screen name={CONSTANT.App.screenNames.splash} component={SplashScreen} />
        </Splash.Navigator>
    )

}

export {
    AuthNavigator,
    //TabStack,
    AppStackNavigator,
    SplashNavigator
}
