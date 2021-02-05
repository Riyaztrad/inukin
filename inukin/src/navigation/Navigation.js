import React, { useState, useEffect, useMemo, useReducer } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../screens/context';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator, View, Alert } from 'react-native';
import { useDispatch, useSelector, batch } from 'react-redux';
import { AuthNavigator, AppStackNavigator } from './index';
import {LOGIN}from '../screens/loginScreen/actionType';
import {setUserData} from '../screens/loginScreen/action'
const Navigation = () => {
    const auth = useSelector(state => state)
    const initialLoginstate = {
        isLoading: true,
        loggedOut: true,
        userToken: null,
        loggedIn: null,
        forceNew: false,
    };
    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'RETREIVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                    loggedIn: true,
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: true,
                    forceNew: false,
                    //  loggedIn:false
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    userToken: null,
                    isLoading: false,
                    loggedIn: false,
                };
            case 'CLEAR':
                return {
                    ...prevState,
                    userToken: null,
                    isLoading: false,
                    loggedIn: false,
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    loggedIn: true,
                };
            case 'NEW_USER':
                return {
                    ...prevState,
                    isLoading: false,
                    loggedIn: false,
                };

        }
    };
    const [isAuth, setAuth] = useState(false)
    const [loginState, dispatch] = useReducer(loginReducer, initialLoginstate);
    const userDispatch = useDispatch();
    const authContext = useMemo(
        () => ({
            login: async userData => {
                // signIn Functions
                console.log("authContext",userData)
                let userToken = null;
                if (userData.email && userData.password) {
                  try {
                    userToken = userData.id;
                    await AsyncStorage.setItem('userToken', userToken);
                  } catch (e) {
                    console.log(e);
                  }
                }
               
                userDispatch(fbLogin(userData));
                dispatch({type: 'LOGIN', token: userToken});
              },
        }),
        [],
    );

    useEffect(() => {
        
        if (auth.loginReducer.data !== null) {
            
            setAuth(true)
        } else {
            setAuth(false)
        }
    }, [auth.loginReducer.data])

    const getUserData = async () => {
        const userdata = await AsyncStorage.getItem("userInfo")
        
        return JSON.parse(userdata)
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {
                    !isAuth ? (
                        <>
                            <AppStackNavigator />
                        </>
                    ) : (
                            <AuthNavigator />
                        )

                }
            </NavigationContainer>
        </AuthContext.Provider>
    );
};

export default Navigation;