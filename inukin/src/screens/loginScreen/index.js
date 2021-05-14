import React, { useState, useEffect ,useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CONSTANT from '../../constants';
import CustomInput from '../../components/CustomInput';
import AuthBox from '../../components/AuthBox';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-community/async-storage';
import Snackbar from 'react-native-snackbar';
import { AuthContext } from '../../context/authContext'
import { LoginApi } from '../../backend/ServiceApi';
import { useDispatch, batch } from 'react-redux';
import { setUserData } from './action'
const LoginScreen = (props) => {

    const { login } = useContext(AuthContext)

    const { navigation } = props
    const [username, setUsername] = useState('');
    const [errUsername, setErrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errPassword, setErrPassword] = useState('');
    const [isSecure, setSecure] = useState(true);
    const [isSubmit, setSubmit] = useState(false)
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const dispatch = useDispatch()
    const onSignup = () => {

        navigation.navigate(CONSTANT.App.screenNames.signup)
    }


    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        const userdata = await AsyncStorage.getItem("user")
        const response = JSON.parse(userdata)
        dispatch(setUserData(response))
    }

    const onLogin = async () => {
        setIsLogin(true)
        var isValid = []
        if (username === "") {
            Snackbar.show({
                text: 'Please enter mobile number',
                action: {
                    title: 'OK',
                    textColor: 'white'
                }
            });

            isValid.push(false)
        }
        else if (username.length !== 10) {
            Snackbar.show({
                text: 'Please enter 10 digit valid mobile number',
                action: {
                    title: 'OK',
                    textColor: 'white'
                }
            });

            isValid.push(false)


        }
        else {
            setErrUsername("")
            isValid.push(true)
        }

        if (password === "") {
            Snackbar.show({
                text: 'Please enter password',
                action: {
                    title: 'OK',
                    textColor: 'white'
                }
            });

            isValid.push(false)
        } else {
            setErrPassword("")
            isValid.push(true)
        }
        if (username === "" && password === "") {
            Snackbar.show({
                text: 'Please enter mobile number password both',
                action: {
                    title: 'OK',
                    textColor: 'white'
                }
            });

            isValid.push(false)
        } else {
            setErrPassword("")
            isValid.push(true)
        }




        if (isValid.includes(false) !== true) {
          
            await login(username, password)
           
        } else {
            console.log("something went wrong")


        }
        setIsLogin(false)
    }
    return (
        <AuthBox>

            <View style={{ alignItems: 'center', marginBottom: 94 }}>
                <Image source={require('../../assets/icons/logo.png')}
                    style={{
                        width: 204,
                        height: 50,
                    }} />
            </View>
            <CustomInput
                plcholder="Mobile"
                onTextChange={(value) => { setUsername(value) }}
                errorMsg={errUsername}
                style={{ marginBottom: 8 }}
                maxLengths={10}
                keyboardTypes={'numeric'}
            />
            <CustomInput
                isSecure={isSecure}
                plcholder="Password"
                rightIcon={isSecure ? "eye-off" : "eye"}
                onTextChange={(value) => { setPassword(value) }}
                onRightIconClick={() => { setSecure(!isSecure) }}
                errorMsg={errPassword}
                style={{ marginTop: 8 }}
            />
            <TouchableOpacity style={styles.forgetbtn}
                onPress={() => {
                    props.navigation.navigate(CONSTANT.App.screenNames.forgot)
                    console.log("hiii")
                }}
                style={{ height: 30, marginTop: 15 }}
            >
                <Text style={styles.forgotpassword}>Forgot password?</Text>
            </TouchableOpacity>
            <Button
                onPress={() => { onLogin() }}
                variant="filled"
                title="Login"
                isloading={isLogin}
                style={{ width: "100%", height: 44 }}
            />

            {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
            <View style={styles.signUpContainer}>
                <View style={styles.innerBox}>
                    <Text style={styles.haveAccount}>Don’t have an account?</Text>
                </View>
                <View style={styles.innerBox}>
                    <Button
                        style={{ height: 44, width: '80%', alignSelf: 'flex-end' }}
                        onPress={() => { onSignup() }} variant="outlined" title="Signup" />
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
        fontSize: 12,
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR
    },
    forgetbtn: {
        marginTop: 20,
        flex: 1,
        width: 141,
        height: 44,
        borderRadius: 8


    },
    forgotpassword: {
        color: CONSTANT.App.colors.i_red,
        fontSize: 15,
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR,
        marginLeft: 30,
        textAlign: 'right'


    }
})

export default LoginScreen;
