import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CONSTANT from '../../constants';
import CustomInput from '../../components/CustomInput';
import AuthBox from '../../components/AuthBox';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import { generateOtp, validateOtp, changePassword } from '../../backend/ServiceApi';
import Snackbar from 'react-native-snackbar';

const ForgotScreen = (props) => {

    const [number, setNumber] = useState('')
    const [otp, setOtp] = useState('')
    const [errotp, setErrOtp] = useState('')
    const [password, setPassword] = useState('')
    const [cfmPassword, setCfmPassword] = useState('')
    const [errpassword, setErrPassword] = useState('')
    const [errcfmPassword, setErrCfmPassword] = useState('')
    const [errEmail, setErrEmail] = useState('')
    const [isSecurep, setSecurep] = useState(true);
    const [isSecurec, setSecurec] = useState(true);
    const [isValidedOTP, setIsValideOTP] = useState(false)
    const [userId, setUserId] = useState('')
    const [isOtp, setisOtp] = useState(false)
    const [isSentOTP, setIsSentOtp] = useState(false)
    const [isVeriying, setIsVerifiying] = useState(false)
 

    const forgotpass = async () => {
        if (isValidedOTP) {
            if (password === cfmPassword) {
                var data = {
                    userId: userId,
                    password: password
                }
                console.log("changepass", data)
                const changepass = await changePassword(data)
                console.log("changepass", changepass)
                if (changepass.error) {
                    Snackbar.show({
                        text: changepass.error.message,
                        action: {
                            title: 'OK',
                            color: 'white'
                        }

                    })
                }
            } else {
                Snackbar.show({
                    text: "Password not match",
                    action: {
                        title: 'OK',
                        color: 'white'
                    }

                })
            }
        } else {
            Snackbar.show({
                text: "Invalid OTP",
                action: {
                    title: 'OK',
                    color: 'white'
                }

            })
        }

    }

    const resendOTP = async () => {
        setisOtp(true)
        if (number.length === 10) {
            var data = {
                mobile: number
            }
            const postdata = await generateOtp(data);
            console.log("postdata", postdata)
            if (postdata.userId !== undefined) {
                setOtp(postdata.code)
                setIsSentOtp(true)
                Snackbar.show({
                    text: "OTP sent",
                    action: {
                        title: 'OK',
                        color: 'white'
                    }

                })
            } else {
                Snackbar.show({
                    text: postdata.error.message,
                    action: {
                        title: 'OK',
                        color: 'white'
                    }

                })
            }
        } else {
            Snackbar.show({
                text: "Please enter valid number",
                action: {
                    title: 'OK',
                    color: 'white'
                }

            })
        }
        setisOtp(false)
    }
 

    const onChangeOtp = async (value) => {
        setOtp(value)

    }

    const verifyotp = async () => {
        setIsVerifiying(true)
        if (otp.length === 6) {
            var data = {
                otp: otp
            }
            const validate = await validateOtp(data)

            console.log("validate", validate)
            if (validate.userId != undefined) {
                setIsValideOTP(true)

                setUserId(validate.userId)
            } else {
                Snackbar.show({
                    text: validate.error.message,
                    action: {
                        title: 'OK',
                        color: 'white'
                    }

                })
            }
        }
        setIsVerifiying(false)
    }

    const onchagePass = async (text) => {
        setCfmPassword(text)
        if (password.length === text.length && password !== text) {
            Snackbar.show({
                text: "Passowrd not match",
                action: {
                    title: 'OK',
                    color: 'white'
                }
            })
        } else {
            Snackbar.hide
        }
    }




    return (

        <AuthBox>
            <Logo />
            {
                !isValidedOTP && otp === "" &&
                <>

                    <CustomInput

                        plcholder="Mobile"
                        onTextChange={(text) => {
                            setNumber(text)

                        }}
                        errorMsg={errEmail}
                        style={{ marginBottom: 8 }}
                        maxLengths={10}
                        keyboardTypes={'numeric'}

                    />
                    {
                        otp === "" &&

                        <Button
                            variant="filled"
                            title="Send OTP"
                            isloading={isOtp}
                            style={{
                                marginTop: 8,
                                width: '100%',
                                height: 44
                            }}
                            onPress={() => resendOTP()}
                        />
                    }


                </>
            }
            {

                otp !== ""  && !isValidedOTP &&
                <>
                    <CustomInput
                        plcholder="Enter OTP code"
                        value={otp}
                        onTextChange={(value) => { onChangeOtp(value) }}
                        errorMsg={errotp}
                        style={{ marginTop: 8 }}

                    />

                    <>
                        <Button
                            variant="filled"
                            title="Verify OTP"
                            isloading={isVeriying}
                            style={{
                                marginTop: 8,
                                width: '100%',
                                height: 44
                            }}
                            onPress={() => verifyotp()}
                        />

                        <View style={[styles.signUpContainer, { marginTop: 10, marginBottom: 10 }]}>
                            <View style={styles.innerBox}>
                                <Text style={styles.haveAccount}>Didn’t receive OTP code?</Text>
                            </View>
                            <View style={styles.innerBox}>
                                <TouchableOpacity
                                    onPress={() => { resendOTP() }}
                                >
                                    <Text style={styles.forgotpassword}>Resend code</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                </>
            }
            {
                isValidedOTP &&
                <>


                    <CustomInput

                        isSecure={isSecurep}
                        plcholder="Password"
                        rightIcon={isSecurep ? "eye-off" : "eye"}
                        onTextChange={(value) => { setPassword(value) }}
                        onRightIconClick={() => { setSecurep(!isSecurep) }}
                        errorMsg={errpassword}
                        style={{ marginBottom: 8 }}
                    />
                    <CustomInput
                        isSecure={isSecurec}
                        plcholder="Confirm Password"
                        rightIcon={isSecurec ? "eye-off" : "eye"}
                        onTextChange={(text) => onchagePass(text)}
                        onRightIconClick={() => { setSecurec(!isSecurec) }}
                        errorMsg={errcfmPassword}
                        style={{ marginTop: 8 }}
                    />



                    <Button
                        variant="filled" title="Submit" style={{ marginTop: 8, width: '100%', height: 44 }}
                        onPress={() => forgotpass()}
                    />

                </>
            }

        </AuthBox>

    )
};

const styles = StyleSheet.create({
    signUpContainer: {
        marginTop: 60,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: 10
    },
    innerBox: {
        width: '50%'
    },
    haveAccount: {
        color: CONSTANT.App.colors.textColor,
        fontSize: 12,
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR,
    },
    forgotpassword: {
        textAlign: 'right',
        color: CONSTANT.App.colors.buttonColor,
        fontSize: 12,
        fontWeight: '900',
        textDecorationLine: 'underline',
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR,
    }
})

export default ForgotScreen;
