import React, { useState, useEffect } from 'react';
import { TextInput, View, StyleSheet, Text, TouchableOpacity,FlatList } from 'react-native';
import {DATA} from '../../constants/data'

function  ListComponent(props) {

    const [isHorizontal,setIsHorizontal]=useState(true)
    return(

<>
<FlatList 
data={DATA.product}
renderItem={(item)=>{
    // console.log('item',item)
    return(
        <View style={styles.flatlist}>
            <Text style={[styles.text,{marginTop:10}]}>Abstact Photo</Text>
            <Text style={[styles.text,{fontSize:13}]}>{item.item.title}</Text>
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
width:230,
        height:150,
        backgroundColor:'#70b5cf',
        marginLeft:10,

        borderRadius:20,


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
