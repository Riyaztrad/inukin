import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CONSTANT from '../../constants';
const AuthBox = ({ children }) => {
    return (
        <View style={styles.background}>
            <View style={styles.box}>
                {children}
            </View>
        </View>
    )
}

export default AuthBox

const styles = StyleSheet.create({
    background: {
        backgroundColor: CONSTANT.App.colors.i_background,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    box: {
        height: 500,
        width: '80%',
        justifyContent: 'center',

    }

})