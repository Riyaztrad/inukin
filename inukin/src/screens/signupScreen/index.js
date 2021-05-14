import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CONSTANT from '../../constants';
import CustomInput from '../../components/CustomInput';
import AuthBox from '../../components/AuthBox';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import { SignupApi } from '../../backend/ServiceApi'
import Snackbar from 'react-native-snackbar';
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
        // alert(1)
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
        } else if (email.length !== 10) {

            Snackbar.show({
                text: 'Please enter 10 digit valid mobile number',
                action: {
                    title: 'OK',
                    textColor: 'white'
                }
            });
            isValid.push(false)
        } else {
            setErrEmail("")
            isValid.push(true)
        }

        if (isValid.includes(false) !== true) {
         try{
            var data = {
                name: name,
                mobile: email,
                password: password
            }
      
            var signupResult = await SignupApi(data)
           
            console.log("sig",signupResult)
            if (signupResult.error) {
                Snackbar.show({
                    text: signupResult.error.message,
                    action: {
                        title: 'OK',
                        color: 'white'
                    }
                });
            } else {
                props.navigation.navigate("otp", signupResult)
            }
            console.log("signup Result", signupResult)
        }catch(ex){
            console.log("error",ex)
        }
            // if()
        }
    }
    return (

        <AuthBox>
            <Logo />
            <CustomInput
                plcholder="Your full name"
                onTextChange={(value) => { setName(value) }}
                //errorMsg={errName}
                maxLengths={30}
                style={{ marginBottom: 8 }}
            />
            <CustomInput
                plcholder="Mobile"
                onTextChange={(value) => { setEmail(value) }}
                // errorMsg={errEmail}
                style={{ marginTop: 8 }}
                maxLengths={10}
                keyboardTypes={'numeric'}

            />
            <CustomInput
                isSecure={isSecure}
                plcholder="Password"
                rightIcon="eye-off"
                rightIcon={isSecure ? "eye-off" : "eye"}
                onTextChange={(value) => { setPassword(value) }}
                onRightIconClick={() => { setSecure(!isSecure) }}
                //rrorMsg={errPassword}
                style={{ marginTop: 16, marginBottom: 16 }}

            />
            <View style={{ width: '100%', height: 44 }}>
                <Button variant="filled" title="Submit" onPress={() => {
                    onSignup()     //props.navigation.navigate(CONSTANT.App.screenNames.otp)
                }} style={{ width: '100%', height: 44 }} />


            </View>
            <View style={styles.signUpContainer}>
                <View style={styles.innerBox}>
                    <Text style={styles.haveAccount}>Already have an account?</Text>
                </View>
                <View style={styles.innerBox}>
                    <Button
                        style={{ height: 44, width: '80%',alignSelf:'flex-end' }}
                        onPress={() => { onLogin() }} variant="outlined" title="Login" />
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
        width: '50%',
        // backgroundColor:'red'
    },
    haveAccount: {
        color: CONSTANT.App.colors.textColor,
        fontSize: 12,
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR
    }
})

export default SignupScreen;
