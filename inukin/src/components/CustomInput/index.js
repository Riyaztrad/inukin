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
    value,
    style,
    textStyle,
    maxLengths,
    keyboardTypes

}) => {
    const [width, setWidth] = useState('')
    useEffect(() => {
    }, [])

    return (

        <View style={[styles.root, style]}>

            <View style={styles.textContainer}>

                {
                    leftIcon &&
                    <View style={styles.leftIconstyle}>
                        <FeatherIcon name={leftIcon} size={20} color={CONSTANT.App.colors.i_lightGrey} />
                    </View>
                }

                <TextInput
                    placeholder={plcholder}
                    maxLength={maxLengths}
                    keyboardType={keyboardTypes}
                    value={value}
                    secureTextEntry={isSecure ? true : false}
                    placeholderTextColor={CONSTANT.App.colors.i_superGrey}
                    onChangeText={(value) => onTextChange(value)}
                    style={[styles.textInput, { paddingLeft: leftIcon ? 30 : 10 ,color:'#000'}, textStyle]}

                />

                {
                    rightIcon &&
                    <TouchableOpacity onPress={onRightIconClick} style={styles.rightIcon}>
                        <FeatherIcon name={rightIcon} size={20} color={CONSTANT.App.colors.i_lightGrey} />
                    </TouchableOpacity>
                }

            </View>

        </View>

        // <View.n>
        //     {
        //         errorMsg !== "" ?
        //             <Text style={styles.errormsg}>{errorMsg}</Text>
        //             : null
        //     }
        //     <View style={[styles.root, style]}>
        //         <View>

        //         </View>

        //         {
        //             leftIcon &&
        //             <View style={styles.leftIconstyle}>
        //                 <FeatherIcon name={leftIcon} size={20} color={CONSTANT.App.colors.i_lightGrey} />
        //             </View>
        //         }

        //         <TextInput
        //             placeholder={plcholder}
        //             secureTextEntry={isSecure ? true : false}
        //             placeholderTextColor={CONSTANT.App.colors.i_superGrey}
        //             onChangeText={(value) => onTextChange(value)}
        //             style={[styles.textInput, { paddingLeft: leftIcon ? 30 : 10 }, textStyle]}

        //         />

        //         {
        //             rightIcon &&
        //             <TouchableOpacity onPress={onRightIconClick} style={styles.rightIcon}>
        //                 <FeatherIcon name={rightIcon} size={20} color={CONSTANT.App.colors.i_lightGrey} />
        //             </TouchableOpacity>
        //         }



        //     </View>

        // </View>
    )
}


const styles = StyleSheet.create({
    root: {
        width: '100%',
        alignItems: 'center'
    },
    textContainer: {
        width: "100%",
        backgroundColor: CONSTANT.App.colors.i_backgroundAccount,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        borderRadius: 8
    },
    errormsg: {
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR,
        marginLeft: 10,
        color: 'red'
    },

    textInput: {
        width: 315,
        height: 44,

        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR,
        fontSize: 14,
        color: CONSTANT.App.colors.i_superGrey,

    },
    leftIconstyle: { position: 'absolute', left: 10 },
    rightIcon: { position: 'absolute', right: 15 }
})


export default CustomInput;