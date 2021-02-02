import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, batch } from 'react-redux';
import CONSTANT from '../../constants';
import { setUserData } from '../loginScreen/action';

const HomeScreen = (props) => {
    const { navigation } = props
    const dispatch = useDispatch()
    return <View>
        <TouchableOpacity onPress={() => {
            dispatch(setUserData(null));
            AsyncStorage.removeItem("userInfo")
            AsyncStorage.clear;
            // navigation.navigate("login")
        }}><Text>Logout</Text></TouchableOpacity>
    </View>
};

export default HomeScreen;