
import React, { useState } from 'react'
import { Text, View, StyleSheet,TextInput } from 'react-native'
import {Entypos,EvilIcon} from '../../constants/Icons'



const SearchHeader=()=>{
    return(
        <View style={styles.searchContainer}>
            <Entypos name="menu" size={35} color={'#3B3B3B'}/>
            <View style={styles.searchInput}>
<EvilIcon name="search" size={30} color={'#C1C7D0'} />
<TextInput
placeholder={"search Photo or contest"}
/>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchInput:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width:300,
        backgroundColor:'#F8F8F8',
        borderRadius:30,
        marginLeft:5,
        padding:3
    },
    searchContainer:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',

    }
    
})
export default SearchHeader;