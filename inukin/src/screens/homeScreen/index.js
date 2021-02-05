import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, batch } from 'react-redux';
import CONSTANT from '../../constants';
import { setUserData } from '../loginScreen/action';
import Button from '../../components/Button';

const HomeScreen = (props) => {
    const { navigation } = props
    const dispatch = useDispatch()
    return <View style={{width: '100%',alignItems:'center'}}>
        {/* <TouchableOpacity onPress={() => {
            dispatch(setUserData(null));
            AsyncStorage.removeItem("userInfo")
            AsyncStorage.clear;
            // navigation.navigate("login")
        }}><Text>Logout</Text></TouchableOpacity> */}
        <Button
            onPress={() => { props.navigation.navigate(CONSTANT.App.screenNames.profile) }}
            variant="filled"
            title="Profile"
            style={{width: '80%'}}
        />
    </View>
};

export default HomeScreen;