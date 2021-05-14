import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CONSTANT from '../../constants';
import CustomInput from '../../components/CustomInput';
import AuthBox from '../../components/AuthBox';
import Logo from '../../components/Logo';
import Button from '../../components/Button'
import { generateOtp, validateOtp, register, signupThirdStep, checkUsername } from '../../backend/ServiceApi';
import Snackbar from 'react-native-snackbar';
import Geolocation from '@react-native-community/geolocation';
const OtpScreen = (props) => {

    const [isValidedOTP, setIsValideOTP] = useState(false)
    const [userId, setUserId] = useState('')
    const [otp, setOtp] = useState('')
    const [username, setUsername] = useState('')
    const [isloading, setIsloading] = useState(false)
    const [lat, setLate] = useState(0)
    const [lng, setLng] = useState(0)
    const [usernameAvail, setUsernameAvail] = useState(false)
    const { route } = props
    useEffect(() => {


        Geolocation.getCurrentPosition(info => {
            console.log(info)
            setLate(info.coords.latitude)
            setLng(info.coords.longitude)
        });
        sendOTP()
    }, [otp])


    const sendOTP = async () => {
        var data = {
            mobile: route.params.mobile

        }
        const response = await generateOtp(data);
        console.log("response", response.code)
        setOtp(response.code)
    }

    const checkusername = async () => {
        setIsloading(true)
        var data = { username: username }
        const response = await checkUsername(data)
        if (response.error !== undefined) {
            setUsernameAvail(false)

        } else {
            setUsernameAvail(true)
        }
        return response;
    }


    const onChangeOtp = async (value) => {
        setOtp(value)

    }

    const submit = async () => {
        setIsloading(true)
        checkusername().then(async (data) => {
            console.log("data", data)

            if (data.error !== undefined) {
                Snackbar.show({
                    text: "Username already exists",
                    action: {
                        title: 'OK',
                        color: 'white'
                    }
                });
                setIsloading(false)
                return 0
            }

            const isValid = [];
            if (username === "") {
                isValid.push(false)
            } else {
                isValid.push(true)
            }



            if (otp === "") {
                isValid.push(false)
            } else {
                isValid.push(true)
            }

            if (isValid.includes(false) !== true) {
                if (isValidedOTP) {
                    const user = route.params
                    var geolocation = {
                        type: "Point",
                        coordinates: [lat, lng]
                    }
                    var data = {
                        "mobile": route.params.mobile,
                        "username": username,
                        "coordinates":  [lat, lng]
                    }
                    const response = await signupThirdStep(data);
                    console.log("signupThirdStep",response)
                    if (response.error) {
                        Snackbar.show({
                            text: response.error.message,
                            action: {
                                title: 'OK',
                                color: 'white'
                            }
                        });
                    } else {
                        Snackbar.show({
                            text: response.message,
                            action: {
                                title: 'OK',
                                color: 'white'
                            }
                        });
                        props.navigation.navigate("login")
                    }
                } else {
                    Snackbar.show({
                        text: "Invalid OTP",
                        action: {
                            title: 'OK',
                            color: 'white'
                        }
                    });
                }
            } else {
                Snackbar.show({
                    text: 'All fields are required',
                    action: {
                        title: 'OK',
                        color: 'white'
                    }
                });
            }
            setIsloading(false)
        })

    }
    const verifyOTP = async () => {
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
            setIsValideOTP(false)
        }
    }
    return (

        <AuthBox>
            <Logo />

            {!isValidedOTP &&
                <>
                    <CustomInput
                        plcholder="Enter OTP code"
                        style={{ marginTop: 16, marginBottom: 16 }}
                        onTextChange={(text) => { onChangeOtp(text) }}
                        value={otp}
                        keyboardTypes={'numeric'}
                    />

                    <View style={[styles.signUpContainer, { marginTop: 10, marginBottom: 10 }]}>
                        <View style={styles.innerBox}>
                            <Text style={styles.haveAccount}>Didn’t receive OTP code?</Text>
                        </View>
                        <View style={styles.innerBox}>
                            <TouchableOpacity
                                onPress={() => {
                                    sendOTP()
                                }}>
                                <Text style={styles.forgotpassword}>Resend code</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Button
                        style={{ width: '100%', height: 44 }}
                        variant="filled"
                        onPress={verifyOTP}
                        title="Verify" />
                </>
            }
            {isValidedOTP &&
                <>
                    <CustomInput
                        plcholder="Set a username"
                        style={{ marginTop: 16, marginBottom: 16 }}
                        onTextChange={(text) => { setUsername(text) }}
                    />
                    {/* <CustomInput
                        plcholder="Location"
                        style={{ marginTop: 16, marginBottom: 16 }}
                        onTextChange={(text) => { setLocation(text) }}
                    /> */}

                    <Button
                        style={{ width: '100%', height: 44 }}
                        variant="filled"
                        onPress={submit}
                        isloading={isloading}
                        title="Submit" />
                </>
            }
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
        fontSize: 12,
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR
    },
    forgotpassword: {
        textAlign: 'right',
        color: CONSTANT.App.colors.buttonColor,
        fontSize: 12,
        fontWeight: '900',
        textDecorationLine: 'underline',
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR
    }
})

export default OtpScreen;
