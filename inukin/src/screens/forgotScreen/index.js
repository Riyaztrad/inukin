import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CONSTANT from '../../constants';
import CustomInput from '../../components/CustomInput';
import AuthBox from '../../components/AuthBox';
import Logo from '../../components/Logo';
import Button from '../../components/Button'
const ForgotScreen = (props) => {



    const onLogin = () => {

        props.navigation.navigate(CONSTANT.App.screenNames.login)
    }
    return (

        <AuthBox>
            <Logo />
            <CustomInput
                plcholder="Email or mobile phone"
            />
            <CustomInput
                plcholder="Enter OTP code"
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
                isSecure={true}
                plcholder="New password"
                rightIcon="eye-off"
            />
            <CustomInput
                isSecure={true}
                plcholder="Confirm password"
                rightIcon="eye-off"
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
        fontSize: 16
    },
    forgotpassword: {
        textAlign: 'right',
        color: CONSTANT.App.colors.buttonColor,
        fontSize: 17,
        fontWeight: '900',
        textDecorationLine: 'underline'
    }
})

export default ForgotScreen;
