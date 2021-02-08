import React from 'react'

import {View,Text,StyleSheet,Image,ScrollView, TouchableOpacity} from  'react-native'
import {FontAwesomes} from '../../constants/Icons'
import CONSTANT from '../../constants'

const InviteFreindScreen=()=>{
    return(
        <ScrollView style={styles.container}>
            <View style={styles.upperdiv}>
                <View style={styles.header}>
<FontAwesomes name="angle-left" size={20} color={'#7A869A'} 
/>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text>Invite Friends</Text>

</View>
                </View>
                <View>
                    <View style={styles.outerDiv}>
                        <View style={styles.innerDiv}>
                            <Text style={styles.rupee}>₹ 200</Text>

                        </View>

                    </View>
                </View>

            </View>
            <View style={styles.bottomdiv}>
                <View style={{ justifyContent:'center',
        alignItems:'center'
}}>

                <Text style={styles.txt}>Wanna get ₹200?</Text>
                <View style={{marginTop:10,justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.txtstyle}>Invite friends to INUK and you will get</Text>
                <Text style={styles.txtstyle}> ₹200 after they make their first</Text>
                <Text style={styles.txtstyle}>purchase in our apps</Text>

                </View>

                </View>
                <View style={styles.footer}>
                    <Text style={{flex:1}}></Text>
                    <Text style={{marginRight:50}}>Code To Code</Text>
                <View style={styles.stylebtn}>
                    <Text>Y182BBK</Text>
                    <TouchableOpacity style={styles.copybtn}>
                    <Text>Copy</Text>
                </TouchableOpacity>

                </View>
                </View>

<TouchableOpacity style={styles.footerbtn}>
    <Text style={styles.btntxt}>Invite Friends</Text>
</TouchableOpacity>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    upperdiv:{
width:'100%',
height:255,
backgroundColor:'#fff',
padding:20



    },
    header:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingLeft:10,
        marginBottom:10,

    

    },
    img:{
        width:300,
        height:170,
        justifyContent:'center',
        alignItems:'center'

    },
    outerDiv:{
        width:330,
        height:200,
        backgroundColor:'#FFD8CC',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'

    },
    innerDiv:{
        width:300,
        height:150,
        backgroundColor:'#F15223',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        overflow: 'hidden',
        justifyContent:'center',
        alignItems:'center'
      
    },
    rupee:{
        fontSize:55,
        color:'#ffffff',
        fontWeight:'700',
        fontFamily:CONSTANT.App.fonts.DMSANSMEDIUM

    },
    bottomdiv:{
        marginTop:13,
        backgroundColor:'#fff',
        padding:20,
        width:'100%',
        height:350
    },
    txt:{
        fontSize:25,
        color:'#3B3B3B',
        fontWeight:'600',
        fontFamily:CONSTANT.App.fonts.DMSANSMEDIUM
    },
    txtstyle:{
        fontSize:15,
        color:'#6E6E6E',
        fontFamily:CONSTANT.App.fonts.DMSANSMEDIUM


    },
    footer:{
        flexDirection:'row',
        justifyContent:'space-between',alignItems:'center',
        marginTop:10,
        // flex:1
    },
    stylebtn:{
        // backgroundColor:'#F9FAFC',
        backgroundColor:'#F9FAFC',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        flex:6,
        borderRadius:20,
    },
    copybtn:{
        width:100,
        backgroundColor:'#FFEBE5',
        padding:13,
        borderRadius:10,
        margin:4,
        fontFamily:CONSTANT.App.fonts.DMSANSMEDIUM


    },
    footerbtn:{
        width:'100%',
        height:60,
        backgroundColor:'#F15223',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    btntxt:{
        color:'#ffffff',
        fontWeight:'700',
        fontSize:15

    }
})
export default InviteFreindScreen;