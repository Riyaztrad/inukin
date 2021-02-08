import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,
    Image ,FlatList,ScrollView} from 'react-native';
import { useDispatch, batch } from 'react-redux';
import CONSTANT from '../../constants';
import { setUserData } from '../loginScreen/action';
import AuthBox from '../../components/AuthBox';
import CustomInput from '../../components/CustomInput';
import { ListComponent } from '../../components/ListComp'
import {SearchBtn} from '../../components/SearchBtn'

//////////////////////////// hhhhhhhhhhhhhhhhhhhhh
import { FeatherIcon,
    EvilIcon,
    AntDesigns,
    MaterialCommunityIcon,
    FontAwesome
 } from '../../constants/Icons'
import { useState } from 'react';
import Button from '../../components/Button'

const HomeScreen = (props) => {
    console.log("staticImages",CONSTANT.App.staticImages.profile)

    console.log("rrrrrrrrrrrrrrrrrrrr")
    const profile=CONSTANT.App.staticImages.profile
    const camera=CONSTANT.App.staticImages.camera
    const [data, setdata] = useState("")

    const [ishorizontal,setishorizontal]=useState(true)

    const data1 = [
        {
            title: 'All',
            value: 'value',
            selected:true,
            iswidth:true
        },
        {
            title: 'Landscap',
            value: 'value',
            selected:false,
            iswidth:false
        },
        {
            title: 'potrat',
            value: 'value',
            selected:false,
            iswidth:false
        },
        {
            title: 'Animal',
            value: 'value',
            selected:false,
            iswidth:false
        },
        {
            title: 'Urban',
            value: 'value',
            selected:false,
            iswidth:false
        }



    ]
    return (

        <ScrollView style={styles.container}>
                         <SearchBtn 
            name="search"
            menu="menu"
            />
            <View style={{width:'100%'}}>
                <Text style={styles.uppertxt}>Photo Contest</Text>
            </View>
            <View style={{ width: '100%' }}>
                <ListComponent />


            </View >

               <View style={styles.buttonView}>
                <FlatList

                    data={data1}

                    renderItem={({ item }) => {
                        console.log("hiiiiii")
                        console.log("itemmmm", item)
                        console.log('itessssss',item.title)
                        return (
                            <View style={{marginRight:5}}>
                               <Button title={item.title} variant={item.selected?"filled":"outlined"}

                               
                               />
                               <View>

                                   </View>

</View>
                               
                        )
                    }}
                    keyExtractor={(item) => item.id}
                    horizontal={ishorizontal}
                    showsHorizontalScrollIndicator={false}


                />
            </View>


                       <View  style={styles.profilecontain}>
                           <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>

                           <Image source={profile} style={{width:50,height:50,borderRadius:150}} />
<View style={{marginLeft:10}}>
<Text style={styles.profoletxt1}>Ian payan</Text>
<Text style={styles.profoletxt2}>5 minutes ago</Text>

</View>

                           </View>
<FeatherIcon name="more-horizontal" size={25} color={'#7A869A'} />
           </View>
            <Text>Striking imagery that features one primary color.</Text>
            <View style={styles.footer}>
               <Image source={camera} style={{width:150,height:80,borderRadius:10
                ,position:'absolute',left:100,top:25
            }} />
            <View style={styles.bottom}>
            {/* <AntDesigns name="heart" color={CONSTANT.App.colors.buttonColor} size={20} />
<FeatherIcon name="message-circle" size={20} color={'grey'} />
<FontAwesome name="share" size={20} color={'#7A869A'}/> */}

            </View>

            
            </View>

            <Text style={{        fontFamily:  CONSTANT.App.fonts.DMSANSREGULAR
}}>hjjjkj</Text>
            <Text style={{fontSize:40}}>hjjjkj</Text>
            <Text style={{fontSize:40}}>hjjjkj</Text>
            <Text style={{fontSize:40}}>hjjjkj</Text>
            <Text style={{fontSize:40}}>hjjjkj</Text>
            <Text style={{fontSize:40}}>hjjjkj</Text>
            <Text style={{fontSize:40}}>hjjj  </Text>      
                <Text style={{fontSize:40}}>hjjjkjkj</Text>
            <Text style={{fontSize:40}}>hjjjkj</Text>
            <Text style={{fontSize:40}}>hjjjkj</Text>



        </ScrollView>

            

    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        width:'100%',
        height:'100%'
    },
    searchView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin:10,


    },
    uppertxt:{
        marginLeft:20,fontSize:15,
        fontFamily:  CONSTANT.App.fonts.DMSANSREGULAR,
        
        margin:12


    },

    buttonView:{
        width:'100%',
        height:80,
        paddingRight:10,
        backgroundColor:'#E5E5E5',
        // marginLeft:12,
        marginTop:18,
        marginBottom:18

    },
    profoletxt1:{
        fontSize:18,
        color:'#172B4D',
        fontFamily:  CONSTANT.App.fonts.DMSANSREGULAR,

    },
    profoletxt2:{
        fontSize:13,
        color:'#7A869A',
        fontFamily:  CONSTANT.App.fonts.DMSANSREGULAR,


    },
    txtStcyle: {
        width: '80%',
        borderBottomWidth: 1,
        height: 50
    },
    profilecontain:{
        width:'100%',
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:15
    },
    footer:{
        backgroundColor:'rgb(51, 103, 214)',
        width:'100%',
        height:140
    },
    bottom:{
        width:250,
        position:'absolute',
        top:120,left:60,flexDirection:'row',
            justifyContent:'space-between',height:50,
            borderRadius:10,alignItems:'center',
            backgroundColor:'#fff',
            paddingLeft:15,
            paddingRight:15,
zIndex:3,
elevation: 3,




    }
})
export default HomeScreen;


















