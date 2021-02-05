import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
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
    ProfileFollowScreen
} from '../screens';



const Tab = createMaterialBottomTabNavigator();
function TabStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                component={HomeScreen}
                name='Home'
            />
            {/* <Tab.Screen
                component={ProfileScreen}
                name='Profile'
            /> */}
        </Tab.Navigator>
    );
}

const Drawer = createDrawerNavigator();
function DrawerStack() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                component={TabStack}
                name='TabStack'
            />
        </Drawer.Navigator>
    );
};



const Stack = createStackNavigator();
function AppStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={DrawerStack} />
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
    TabStack,
    AppStackNavigator,
    SplashNavigator
}
