import React from 'react'
import { useState } from 'react';
import {View,Text,FlatList,SafeAreaView,Image,StyleSheet} from 'react-native';

import CONSTANT from '../../constants'
import { DATA } from '../../constants/data';

const List =(props)=>{
// const [data ,setData]=useState("")
    return(
<SafeAreaView >
                        <FlatList 
                        data={DATA.list}
                        renderItem={({item})=>{
                            console.log("Item",item)
                            return(
                                <View key={item.key}> 
                                    <Image source={item.image} style={styles.image} />

                                    </View>
                            )
                        }}
                        keyExtractor={(item, index) => item.key}
                        numColumns={2}
                        />

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    image:{
        width:150,
        height:150,
        margin:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
    }
})
export {List}