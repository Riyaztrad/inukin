import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import CustomHeader from '../../components/CustomHeader'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import CONSTANT from '../../constants';
import { MaterialIcon } from '../../constants/Icons'
import Button from '../../components/Button'
import ProfileHeader from '../../components/ProfileHeader'
import { useState } from 'react/cjs/react.development';
import { FontAwesomes } from '../../constants/Icons';
const DetailScreen = ({navigation}) => {
    const SCROLLBUTTON = [
        {
            name: 'All',
            variant: 'filled'

        },
        {
            name: 'Landscape',
            variant: 'outlined'
        },
        {
            name: 'Portrait',
            variant: 'outlined'
        },
        {
            name: 'Animal',
            variant: 'outlined'
        },
        {
            name: 'Urban',
            variant: 'outlined'
        }
    ]
    const [variant, setvariant] = useState(true)
    const icon = CONSTANT.App.staticImages.back
    const avatars = CONSTANT.App.staticImages.avatar
    return (
        <ScrollView style={styles.conatiner}>
            <CustomHeader
                icon={icon}
                name={'Photo Detail'} 
                // navigation={navigation}
                onPress={()=>{ navigation.goBack() }}/>
            <View style={styles.middle}>
                <Image source={require('../../assets/icons/camera.png')} style={styles.img} 
                />



            </View>
            <View style={[styles.profile,{paddingBottom:20}]}>
                <View style={styles.profile}>
                    <Image source={require('../../assets/icons/avatar.png')}
                        style={{ width: 32, height: 32, borderRadius: 15 }} />

                    <View style={{ marginLeft: 10 }}>
                        <Text style={[styles.redtext, { color: '#3B3B3B'}]}>layn payne</Text>
                        <Text style={[styles.redtext, { color: '#3B3B3B'}]}>5 minuts ago</Text>
                    </View>
                </View>
                <Button variant={'filled'}
                title={"Follow"}
                style={{width:100,height:30,marginRight:10}}/>
                {/* <TouchableOpacity>
                    <Text>Button</Text>
                </TouchableOpacity> */}
            </View>
            <View style={styles.iconliststyle}>
                <Image source={require('../../assets/icons/iconList.png')} style={{ width: 313, height: 66 }} />

            </View>
            <View style={[styles.iconliststyle, {
                height: 102,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
            }]}>
                <Image source={require('../../assets/icons/logoList.png')} style={{ width: 237, height: 62 }} />


            </View>

            <View style={styles.medium}>
                <Text style={styles.text}>Detail :</Text>
                <View style={styles.drawn}>
                    <Text style={styles.text}>Category :</Text>
                    <TouchableOpacity style={styles.categoryStyle}>
                        <Text style={[styles.text, { color: '#172B4D' }]}>Nature</Text>
                        <Image source={require('../../assets/icons/rightarrow.png')}
                            style={{ width: 20, height: 20 }} />
                        <Text style={[styles.text, { color: '#172B4D' }]}>LandScap</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.drawn, { width: 50 }]}>
                    <Text style={styles.text}>Tags :</Text>
                    <View style={styles.redView}>
                        <Text style={styles.redtext}>#Nature</Text>
                    </View>
                    <View style={styles.redView}>
                        <Text style={styles.redtext}>#Photos</Text>
                    </View>
                    <View style={styles.redView}>
                        <Text style={styles.redtext}>#Nice</Text>
                    </View>
                    <View style={styles.redView}>
                        <Text style={styles.redtext}>#Nice</Text>
                    </View>


                </View>

                <View style={styles.drawn}>
                    <Text style={styles.text}>Locations :</Text>
                    <Text style={[styles.text, { color: '#172B4D' }]}>Almora,Lokhanda</Text>
                </View>
            </View>

            <View style={{width:200,height:200,marginTop:10,marginLeft:20,marginRight:20}}>
{/* <View style={{backgroundColor:'#fff'}}> */}
<MapView 
provider={PROVIDER_GOOGLE}
style={{flex:1,width:350}}
region={{
    latitude: 42.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
  showsUserLocation

/>
{/* </View> */}
            </View>
            {/* <View style={{marginLeft:10}}> */}
                {/* <View style={styles.mapView}> */}
                    {/* <Image source={require('../../assets/icons/map.png')} style={styles.map} /> */}
               
               
                    {/* <MapView */}
        {/* provider={PROVIDER_GOOGLE} // remove if not using Google Maps */} 
        {/* style={styles.map} */}
           {/* region={{ */}
     {/* latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121, */}
       {/* }} */}
     {/* >  */}
     {/* </MapView> */}

                {/* </View> */}
{/* </View> */}

            <View style={styles.iconView}>
                <View style={styles.innerView}>
                    <Text style={[styles.redtext, { color: '#172B4D' }]}>Gear Information</Text>
                    <View style={styles.row}>
                        <Image source={require('../../assets/icons/iconCamera.png')} style={styles.iconimg} />
                        <Text style={[styles.redtext, { color: '#3B3B3B', marginLeft: 10 }]}>Canon EOS 5D Mark 4</Text>
                    </View>


                    <View style={styles.row}>
    <Image source={require('../../assets/icons/lensefill.png')} style={styles.iconimg} />
    <Text style={[styles.redtext,{color:'#3B3B3B',marginLeft:10}]}>Wide angle, 4mm - 14mm</Text>
</View>

<View style={styles.row}>
    <Image source={require('../../assets/icons/hutterstock.png')} style={styles.iconimg} />
    <Text style={[styles.redtext,{color:'#3B3B3B',marginLeft:10}]}>1/500</Text>
</View>

                </View>

            </View>

            <View style={styles.bottom}>
                <View style={styles.innerBottom}>
                    <Image source={require('../../assets/icons/lolipop.png')} style={styles.bottomimg}/>
                    <Image source={require('../../assets/icons/orange.png')} style={styles.bottomimg}/>
                    <Image source={require('../../assets/icons/apple.png')} style={styles.bottomimg}/>

                </View>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        width: '100%',
        height: '100%',
    },
    middle: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: CONSTANT.App.colors.i_background,

    },
    img: {
        width: 315,
        height: 157,
        borderRadius: 15
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingLeft: 20,
        paddingRight: 30,
        backgroundColor: CONSTANT.App.colors.i_background,


    },
    iconliststyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 106,
        marginTop: 10,
        padding: 22,
        backgroundColor: CONSTANT.App.colors.i_background,


    },
    medium: {
        padding: 25,
        backgroundColor: CONSTANT.App.colors.i_background,

    },
    text: {
        color: CONSTANT.App.colors.i_solidblue,
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR,
        fontSize: 14,
        color: '#7A869A',



    },
    drawn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10

    },
    categoryStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    redView: {
        width: 66,
        height: 28,
        borderRadius: 4,
        backgroundColor: '#FCF1EA',
        justifyContent: 'center',
        alignItems: 'center'
    },
    redtext: {
        color: '#F15223',
        fontSize: 14,
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR,



    },
    mapView:{
        ...StyleSheet.absoluteFillObject,
        height: 700,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding:10
     

    },
    map: {
           ...StyleSheet.absoluteFillObject,

        width: 315,
        height: 175
    },
    iconView: {
        height: 180,
        padding: 20,
        backgroundColor: CONSTANT.App.colors.i_background,
        marginTop: 10

    },
    innerView: {
        width: 180, height: 140,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10

    },
    iconimg: {
        width: 24,
        height: 24
    },
    bottom:{
        height:111,
        marginTop:10,
        padding:20,
        backgroundColor: CONSTANT.App.colors.i_background,
        alignItems:'center',
        justifyContent:'center'


    },
    innerBottom:{
        width:315,
        height:72,
        flexDirection:'row',
        justifyContent:'center',alignItems:'center'


    },
    bottomimg:{
        width:104,
        height:72,
        marginRight:4
    }
})
export default DetailScreen;