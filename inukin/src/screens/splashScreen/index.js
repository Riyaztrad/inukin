import React, { useEffect } from 'react';
import { View, Text } from 'react-native'
import AuthBox from '../../components/AuthBox';
import AsyncStorage from '@react-native-community/async-storage';
import Logo from '../../components/Logo'
import { useDispatch, useSelector, batch } from 'react-redux';
import { setUserData } from '../loginScreen/action'
const SplashScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        // var userdata =await getUserData()
        // console.log("userdataauth", userdata)
        getUserData()


        // if(auth.)
    })

    const getUserData = async () => {
        const userdata = await AsyncStorage.getItem("user")

        const response = JSON.parse(userdata)
        console.log("response", response)
        if (response != null) {

            dispatch(setUserData(userdata));
        } else {
            dispatch(setUserData(null));
        }
    }

    return (
        <View style={{height:'100%' , width:'100%',justifyContent:'center',alignItems:'center'}}>
            <Logo splash />
        </View>
    )
}

export default SplashScreen