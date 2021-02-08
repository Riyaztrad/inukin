import React, { useState, useEffect } from 'react';
import { TextInput, View, StyleSheet, Text, TouchableOpacity,FlatList,Image } from 'react-native';
import {DATA} from '../../constants/data'

function  ListComponent(props) {

    const [isHorizontal,setIsHorizontal]=useState(true)
    return(

<>
<FlatList 
data={DATA.product}
renderItem={(item)=>{
    console.log('item',item)
    console.log('item1111',item.item)
    console.log("iteminmmmmm",item.item.image)
    return(
        // <View style={styles.flatlist}>
            <View style={{marginLeft:12}}>

<Image source={item.item.image}   style={{width:250,height:150,borderRadius:20}} />

        </View>
    )
}}
keyExtractor={item=>item.id}
horizontal={isHorizontal}
showsHorizontalScrollIndicator={false}

/>
</>
    )
    
}

const styles = StyleSheet.create({
    flatlist:{
width:100,
        height:150,
        marginLeft:10,

        // borderRadius:20,


    },
    text:{
        color:'white',
        fontSize:20,
        marginLeft:10,
        fontWeight:'600',
        // marginTop:15
    }
})
export {ListComponent}
