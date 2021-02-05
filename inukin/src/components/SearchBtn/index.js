
import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import {FeatherIcon} from '../../constants/Icons'
import CONSTANT from '../../constants';

const SearchBtn=(props)=>{

    return(
        <View style={styles.searchbar}>
        <FeatherIcon name={props.menu} size={25} />
        <View style={styles.root}>
            <FeatherIcon name={props.name} size={25} />
            <TextInput
            />
        </View>
        </View>
    )


}
const styles = StyleSheet.create({
    searchbar:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:10
    },
        root: {
            backgroundColor: CONSTANT.App.colors.inputBackground,
            height: 40,
            padding: 5,
            borderRadius: 15,
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
        }
    

    
})
export  {SearchBtn};