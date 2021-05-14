import React from 'react'
import {View,Text,StyleSheet,FlatList,Image} from 'react-native'


const ListComponent=(props)=>{
    return(
        <>
<FlatList 

data={props.data}
renderItem={({item})=>{
    return(
        <View>
            {/* <Image source={item.image} style={{width:183,height:252,marginRight:10,borderTopLeftRadius:25,
            borderTopRightRadius:15,borderBottomRightRadius:15}} /> */}
            <Image source={item.image} style={{width:183,height:252,borderRadius:22,marginRight:10}}/>

            {/* </View> */}
            </View>
    )
}}

keyExtractor={(item,index)=>index.toString()}
horizontal
showsHorizontalScrollIndicator={false}
/>

        </>
    )
}

export {ListComponent}