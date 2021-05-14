import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import CONSTANT from '../../constants';
const Button = ({ variant, title, onPress, style, textStyle, isloading }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[{
                // width: '100%',
                backgroundColor: variant === 'filled' ? CONSTANT.App.colors.i_red : 'transparent',
                borderRadius: 15,
                borderWidth: variant === 'outlined' ? 1 : 0,
                borderColor: variant === 'outlined' ? CONSTANT.App.colors.i_red : '',
                padding: 20,
                justifyContent: 'center',
                alignItems: 'center'
            }, style]}
        >
            {
                isloading ?
                    <ActivityIndicator size="small" color="#fff" />
                    :
                    <Text style={[{
                        color: variant === 'outlined' ? CONSTANT.App.colors.i_red : '#fff',
                        fontSize: 14, fontFamily: CONSTANT.App.fonts.DMSANSMEDIUM
                    }, textStyle]}>{title}</Text>
            }

        </TouchableOpacity>
    )
}



export default Button