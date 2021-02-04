import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import CONSTANT from '../../constants';
const Button = ({ variant, title, onPress }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                width: '100%',
                backgroundColor: variant === 'filled' ? CONSTANT.App.colors.buttonColor : 'transparent',
                borderRadius: 15,
                borderWidth: variant === 'outlined' ? 1 : 0,
                borderColor: variant === 'outlined' ? CONSTANT.App.colors.buttonColor : '',
                padding: 20,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text style={{
                color: variant === 'outlined' ? CONSTANT.App.colors.buttonColor : '#fff',
                fontSize: 20, fontFamily: CONSTANT.App.fonts.DMSANSREGULAR
            }}>{title}</Text>
        </TouchableOpacity>
    )
}



export default Button