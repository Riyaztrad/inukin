import React, { useState, useEffect } from 'react';
import { TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FeatherIcon } from '../../constants/Icons'
import CONSTANT from '../../constants';
const CustomInput = ({
    plcholder,
    rightIcon,
    leftIcon,
    isSecure,
    onTextChange,
    onRightIconClick,
    errorMsg,
    style
}) => {
    const [width, setWidth] = useState('')
    useEffect(() => {
    }, [])

    return (
        <>
            {
                errorMsg !== "" ?
                    <Text style={styles.errormsg}>{errorMsg}</Text>
                    : null
            }
            <View style={[styles.root, style]}>

                {
                    leftIcon &&
                    <View style={styles.leftIconstyle}>
                        <FeatherIcon name={leftIcon} size={20} color={CONSTANT.App.colors.i_lightGrey} />
                    </View>
                }

                <TextInput
                    placeholder={plcholder}
                    secureTextEntry={isSecure ? true : false}
                    placeholderTextColor={CONSTANT.App.colors.placeholderColor}
                    onChangeText={(value) => onTextChange(value)}
                    style={[styles.textInput,{paddingLeft: leftIcon ? 30 : 10}]}
                    
                />

                {
                    rightIcon &&
                    <TouchableOpacity onPress={onRightIconClick} style={styles.rightIcon}>
                        <FeatherIcon name={rightIcon} size={20} color={CONSTANT.App.colors.i_lightGrey} />
                    </TouchableOpacity>
                }



            </View>

        </>
    )
}


const styles = StyleSheet.create({
    root: {
        backgroundColor: CONSTANT.App.colors.inputBackground,
        height: 60,
        padding: 5,
        borderRadius: 15,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    errormsg: {
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR,
        marginLeft: 10, color: 'red'
    },
    textInput: {
        height: '100%',
        width: '100%',
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR,
    },
    leftIconstyle: { position: 'absolute', left: 10 },
    rightIcon: { position: 'absolute', right: 15 }
})


export default CustomInput;