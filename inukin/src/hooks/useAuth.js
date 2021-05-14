import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage'
import CONSTANT from '../constants/index'
import { createAction } from '../util/createAction';
import { sleep } from '../util/sleep';
import Snackbar from 'react-native-snackbar';
export function useAuth() {
    console.log("riyaz")
    const [state, dispatch] = React.useReducer(
        (state, action) => {
            switch (action.type) {
                case 'SET_USER':
                    return {
                        ...state,
                        user: { ...action.payload },
                    };
                case 'REMOVE_USER':
                    return {
                        ...state,
                        user: undefined,
                    };
                case 'SET_LOADING':
                    return {
                        ...state,
                        loading: action.payload,
                    };
                default:
                    return state;
            }
        },
        {
            user: undefined,
            loading: true,
        },
    );
    const auth = React.useMemo(
        () => ({
            login: async (mobile, password) => {
                console.log("mobile, password", mobile, password)
                var obj = {
                    mobile,
                    password
                }
                console.log(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.login}`,CONSTANT.Api.TOKEN)
                const data = await fetch(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.login}`, {
                    method: 'POST',
                    headers: {
                        "x-api-key": CONSTANT.Api.TOKEN,
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify(obj)
                })
                var response = await data.json()
                console.log("data", response)
                if (response.token !== undefined) {
                    
                    await AsyncStorage.setItem('user', JSON.stringify(response));
                    dispatch(createAction('SET_USER', response));
                   
                } else {
                 
                    Snackbar.show({
                        text: response.error.message,
                        action: {
                            title: 'Ok',
                            textColor: 'white'
                        }
                    });

                }
                
            },
            logout: async () => {
                await AsyncStorage.removeItem('user');
                dispatch(createAction('REMOVE_USER'));
            },
            register: async (email, password) => {
                await sleep(2000);
                // await axios.post(`${BASE_URL}/auth/local/register`, {
                //     username: email,
                //     email,
                //     password,
                // });
            },
        }),
        [],
    );
    React.useEffect(() => {
        sleep(2000).then(() => {
            AsyncStorage.getItem('user').then(user => {
                if (user) {
                    dispatch(createAction('SET_USER', JSON.parse(user)));
                }
                dispatch(createAction('SET_LOADING', false));
            });
        });
    }, []);
    return { auth, state };
}
