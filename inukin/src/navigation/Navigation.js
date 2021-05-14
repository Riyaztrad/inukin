import React, { useState, useEffect, useMemo, useReducer } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator, View, Alert } from 'react-native';
import { useDispatch, useSelector, batch } from 'react-redux';
import { AuthNavigator, AppStackNavigator } from './index';
import { LOGIN } from '../screens/loginScreen/actionType';
import { setUserData } from '../screens/loginScreen/action';
import { useAuth } from '../hooks/useAuth';
import { UserContext } from '../context/userContext';
import { AuthContext } from '../context/authContext';
import SplashScreen from '../screens/splashScreen';
const Navigation = () => {
    const { auth, state } = useAuth();
    // const auth = useSelector(state => state)
    const [isAuth, setAuth] = useState(false);
   
    const RootStack = createStackNavigator();
    console.log("authdata", auth, state)
    // useEffect(() => {

    //     if (auth.loginReducer.data !== null) {

    //         setAuth(true)
    //     } else {
    //         setAuth(false)
    //     }
    // }, [auth.loginReducer.data])

    function renderScreens() {
        if (state.loading) {

            return <RootStack.Screen name={'Login'} component={SplashScreen} />;
        }
        return state.user ? (
            <RootStack.Screen name={'Home'}>
                {() => (
                    <UserContext.Provider value={state.user}>
                        <AppStackNavigator />
                    </UserContext.Provider>
                )}
            </RootStack.Screen>
        ) : (
                // <AuthNavigator />
                <RootStack.Screen name={'AuthStack'} component={AuthNavigator} />
            );
    }


    return (
        <AuthContext.Provider value={auth}>
            <NavigationContainer>
                <RootStack.Navigator
                    screenOptions={{
                        headerShown: false,
                        animationEnabled: false,
                    }}>
                    {renderScreens()}
                </RootStack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
};

export default Navigation;