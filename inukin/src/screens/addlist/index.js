import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import SearchHeader from '../../components/searchHeader'
import {FontAwesomes,AntDesigns} from '../../constants/Icons'
import {List } from '../../components/List'
import DATA from '../../constants/data'

const AddListScreen=()=>{
    return(

                 <ScrollView  style={styles.container}>
                                <View style={{width:'100%',height:100,backgroundColor:'#fff',padding:20}}>
        <SearchHeader />

             </View>

                 <View  style={{width:'100%',height:50,backgroundColor:'#fff',padding:20,marginTop:12}}>
                 <View style={styles.secondpart}>

                <View style={styles.moreView}>
                    <Text style={styles.text}>most Viewd</Text>
                    <FontAwesomes name="angle-down" size={20} color={"#3B3B3B"} 
                    style={{marginRight:5}}/>
             </View>
<View style={styles.filter}>
<AntDesigns name="filter" size={15} color={"#3B3B3B"} />

</View>
</View>

             </View>
                 <View style={{width:'100%',height:'100%',backgroundColor:'#fff',padding:20}}>
                 <List 
                   />
                    
               </View>



                     <Text style={{fontSize:40}}>hhhhhhhhhh</Text>
                     <Text style={{fontSize:40}}>hhhhhhhhhh</Text>
                     <Text style={{fontSize:40}}>hhhhhhhhhh</Text>
                     <Text style={{fontSize:40}}>hhhhhhhhhh</Text>
                     <Text style={{fontSize:40}}>hhhhhhhhhh</Text>
                     <Text style={{fontSize:40}}>hhhhhhhhhh</Text>
                     <Text style={{fontSize:40}}>hhhhhhhhhh</Text>
                     <Text style={{fontSize:40}}>hhhhhhhhhh</Text>
                     <Text style={{fontSize:40}}>hhhhhhhhhh</Text>
                     <Text style={{fontSize:40}}>hhhhhhhhhh</Text>
                     <Text style={{fontSize:40}}>hhhhhhhhhh</Text>


                     </ScrollView>

    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    moreView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:150,
        borderRadius:30,
        padding:2,
        backgroundColor:'#E5E5E5',
        marginLeft:10
    },
    secondpart:{
        flexDirection:'row',
        justifyContent:'space-between'

    },

    text:{
        marginLeft:5,
        marginBottom:4,
        marginTop:2,
        color:'#3B3B3B'

    },
    filter:{
        width:30,
        height:30,
        borderRadius:150,
        backgroundColor:'#E5E5E5',
        justifyContent:'center',
        alignItems:'center',
        marginRight:10
    }
    
})

export default AddListScreen;