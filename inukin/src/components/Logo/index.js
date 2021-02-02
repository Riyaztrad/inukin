import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CONSTANT from '../../constants';
const Logo = ({ }) => {
    return (
        <View style={styles.root}>
            <Text style={styles.l1}>in</Text>
            <Text style={styles.l2}>uk</Text>
            <Text style={styles.l3}>.in</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        marginBottom:30
    },
    l1:{
        fontSize:50,
        fontWeight:'bold'
    },
    l2:{
        fontSize:50,
        fontWeight:'bold',
        textDecorationLine:'underline',
        color:CONSTANT.App.colors.logoColor

    },
    l3:{
        fontSize:50,
        fontWeight:'bold'
    }
})

export default Logo;