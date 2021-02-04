import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CONSTANT from '../../constants';
import CustomInput from '../../components/CustomInput';
import AuthBox from '../../components/AuthBox';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import { SignupApi } from '../../backend/ServiceApi'

const SignupScreen = (props) => {

    const [name, setName] = useState('');
    const [errName, setErrName] = useState('');
    const [email, setEmail] = useState('');
    const [errEmail, setErrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errPassword, setErrPassword] = useState('');
    const [isSecure, setSecure] = useState(true);
    const onLogin = () => {
        props.navigation.navigate(CONSTANT.App.screenNames.login)
    }

    const onSignup = async () => {
        var isValid = []
        if (name === "") {
            setErrName("Please enter username")
            isValid.push(false)
        } else {
            setErrName("")
            isValid.push(true)
        }
        if (password === "") {
            setErrPassword("Please enter password")
            isValid.push(false)
        } else {
            setErrPassword("")
            isValid.push(true)
        }

        if (email === "") {
            setErrEmail("Please enter password")
            isValid.push(false)
        } else {
            setErrEmail("")
            isValid.push(true)
        }
        if (isValid.includes(false) !== true) {
            var data = {
                name: name,
                email: email,
                password: password
            }
            var signupResult = await SignupApi(data)
            console.log("signup Result", signupResult)
           // if()
        }
    }
    return (

        <AuthBox>
            <Logo />
            <CustomInput
                plcholder="Your full name"
                onTextChange={(value) => { setName(value) }}
                errorMsg={errName}
            />
            <CustomInput
                plcholder="Email or mobile phone"
                onTextChange={(value) => { setEmail(value) }}
                errorMsg={errEmail}
            />
            <CustomInput
                isSecure={isSecure}
                plcholder="Password"
                rightIcon="eye-off"
                rightIcon={isSecure ? "eye-off" : "eye"}
                onTextChange={(value) => { setPassword(value) }}
                onRightIconClick={() => { setSecure(!isSecure) }}
                errorMsg={errPassword}
            />

            <Button variant="filled" title="Submit" onPress={() => {
                onSignup()     //props.navigation.navigate(CONSTANT.App.screenNames.otp)
            }} />
            <View style={styles.signUpContainer}>
                <View style={styles.innerBox}>
                    <Text style={styles.haveAccount}>Already have an account?</Text>
                </View>
                <View style={styles.innerBox}>
                    <Button onPress={() => { onLogin() }} variant="outlined" title="Login" />
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
    }
})

export default SignupScreen;
