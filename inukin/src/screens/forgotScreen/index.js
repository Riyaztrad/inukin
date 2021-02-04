import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CONSTANT from '../../constants';
import CustomInput from '../../components/CustomInput';
import AuthBox from '../../components/AuthBox';
import Logo from '../../components/Logo';
import Button from '../../components/Button'
const ForgotScreen = (props) => {

    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [errotp, setErrOtp] = useState('')
    const [password, setPassword] = useState('')
    const [cfmPassword, setCfmPassword] = useState('')
    const [errpassword, setErrPassword] = useState('')
    const [errcfmPassword, setErrCfmPassword] = useState('')
    const [errEmail, setErrEmail] = useState('')
    const [isSecurep, setSecurep] = useState(true);
    const [isSecurec, setSecurec] = useState(true);
    const onLogin = () => {

        props.navigation.navigate(CONSTANT.App.screenNames.login)
    }
    return (

        <AuthBox>
            <Logo />
            <CustomInput

                plcholder="Email or mobile phone"
                onTextChange={(value) => { setEmail(value) }}
                errorMsg={errEmail}
            />
            <CustomInput
                plcholder="Enter OTP code"
                onTextChange={(value) => { setOtp(value) }}
                errorMsg={errotp}
            />

            <View style={[styles.signUpContainer, { marginTop: 0 }]}>
                <View style={styles.innerBox}>
                    <Text style={styles.haveAccount}>Didn’t receive OTP code?</Text>
                </View>
                <View style={styles.innerBox}>
                    {/* <TouchableOpacity style={{ marginBottom: 20 }}> */}
                    <Text style={styles.forgotpassword}>Resend code</Text>
                    {/* </TouchableOpacity> */}
                </View>
            </View>

            <CustomInput

                isSecure={isSecurep}
                plcholder="Password"
                rightIcon={isSecurep ? "eye-off" : "eye"}
                onTextChange={(value) => { setPassword(value) }}
                onRightIconClick={() => { setSecurep(!isSecurep) }}
                errorMsg={errpassword}
            />
            <CustomInput
               isSecure={isSecurec}
               plcholder="Confirm Password"
               rightIcon={isSecurec ? "eye-off" : "eye"}
               onTextChange={(value) => { setPassword(value) }}
               onRightIconClick={() => { setSecurec(!isSecurec) }}
               errorMsg={errcfmPassword}
            />

            <Button variant="filled" title="Submit" />

        </AuthBox>

    )
};

const styles = StyleSheet.create({
    signUpContainer: {
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    innerBox: {
        width: '50%'
    },
    haveAccount: {
        color: CONSTANT.App.colors.textColor,
        fontSize: 16,
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR,
    },
    forgotpassword: {
        textAlign: 'right',
        color: CONSTANT.App.colors.buttonColor,
        fontSize: 17,
        fontWeight: '900',
        textDecorationLine: 'underline',
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR,
    }
})

export default ForgotScreen;
