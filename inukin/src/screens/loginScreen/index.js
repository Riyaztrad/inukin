import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CONSTANT from '../../constants';
import CustomInput from '../../components/CustomInput';
import AuthBox from '../../components/AuthBox';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-community/async-storage';
import { LoginApi } from '../../backend/ServiceApi';
import { useDispatch, batch } from 'react-redux';
import { setUserData } from './action'
const LoginScreen = (props) => {
    const { navigation } = props
    const [username, setUsername] = useState('');
    const [errUsername, setErrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errPassword, setErrPassword] = useState('');
    const [isSecure, setSecure] = useState(true);
    const [isSubmit, setSubmit] = useState(false)
    const [error, setError] = useState('');

    const dispatch = useDispatch()
    const onSignup = () => {

        navigation.navigate(CONSTANT.App.screenNames.signup)
    }


    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        const userdata = await AsyncStorage.getItem("userInfo")
        const response = JSON.parse(userdata)
        dispatch(setUserData(response))
    }

    //naghma
    //hello
    const onLogin = async () => {
        var isValid = []
        if (username === "") {
            setErrUsername("Please enter username")
            isValid.push(false)
        } else {
            setErrUsername("")
            isValid.push(true)
        }
        if (password === "") {
            setErrPassword("Please enter password")
            isValid.push(false)
        } else {
            setErrPassword("")
            isValid.push(true)
        }
        if (isValid.includes(false) !== true) {
            var data = {
                email: username,
                password: password
            }
            dispatch(setUserData(data))
            var loginresult = await LoginApi(data);
            if (loginresult.token !== undefined) {
                AsyncStorage.setItem("userInfo", JSON.stringify(loginresult))
                // dispatch(setUserData(loginresult));
                dispatch(setUserData({ name: 'abc' }))
                setError("")
            } else {
                setError("Invalid username or password")
            }
        }

    }
    return (
        <AuthBox>
            <Logo />
            <CustomInput
                plcholder="Email or mobile phone"
                onTextChange={(value) => { setUsername(value) }}
                errorMsg={errUsername}
            />
            <CustomInput
                isSecure={isSecure}
                plcholder="Password"
                rightIcon={isSecure ? "eye-off" : "eye"}
                onTextChange={(value) => { setPassword(value) }}
                onRightIconClick={() => { setSecure(!isSecure) }}
                errorMsg={errPassword}
            />
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate(CONSTANT.App.screenNames.forgot)
                }}
                style={{ marginBottom: 20 }}>
                <Text style={styles.forgotpassword}>Forgot password?</Text>
            </TouchableOpacity>
            <Button
                onPress={() => { onLogin() }}
                variant="filled"
                title="Login"
            />
            {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
            <View style={styles.signUpContainer}>
                <View style={styles.innerBox}>
                    <Text style={styles.haveAccount}>Don’t have an account?</Text>
                </View>
                <View style={styles.innerBox}>
                    <Button onPress={() => { onSignup() }} variant="outlined" title="Signup" />
                </View>
            </View>
        </AuthBox>

    )
};

const styles = StyleSheet.create({
    signUpContainer: {
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    innerBox: {
        width: '50%'
    },
    haveAccount: {
        color: CONSTANT.App.colors.textColor,
        fontSize: 16,
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR
    },
    forgotpassword: {
        textAlign: 'right',
        color: CONSTANT.App.colors.buttonColor,
        fontSize: 17,
        fontWeight: '900',
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR

    }
})

export default LoginScreen;
