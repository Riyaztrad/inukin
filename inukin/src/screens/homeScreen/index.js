import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, TextInput,
    Image, FlatList, ScrollView
} from 'react-native';
import { useDispatch, batch } from 'react-redux';
import CONSTANT from '../../constants';
import { setUserData } from '../loginScreen/action';
import AuthBox from '../../components/AuthBox';
import CustomInput from '../../components/CustomInput';
import { ListComponent } from '../../components/ListComp'
import { SearchBtn } from '../../components/SearchBtn'
import {
    FeatherIcon,
    EvilIcon,
    AntDesigns,
    MaterialCommunityIcon,
    FontAwesome
} from '../../constants/Icons'
import { useState } from 'react';
import Button from '../../components/Button'

const HomeScreen = (props) => {
    console.log("staticImages", CONSTANT.App.staticImages.profile)

    console.log("rrrrrrrrrrrrrrrrrrrr")
    const profile = CONSTANT.App.staticImages.profile
    const camera = CONSTANT.App.staticImages.camera
    const [data, setdata] = useState("")

    const [ishorizontal, setishorizontal] = useState(true)

    const data1 = [
        {
            title: 'title',
            value: 'value',
            selected: true,
            iswidth: true
        },
        {
            title: 'title',
            value: 'value',
            selected: false,
            iswidth: false
        },
        {
            title: 'title',
            value: 'value',
            selected: false,
            iswidth: false
        },
        {
            title: 'title',
            value: 'value',
            selected: false,
            iswidth: false
        },
        {
            title: 'title',
            value: 'value',
            selected: false,
            iswidth: false
        }



    ]
    return (
        <ScrollView style={styles.container}>
            <SearchBtn
                name="search"
                menu="menu"
            />
            <View style={{ width: '100%' }}>
                <Text style={{ marginLeft: 20 }}>Photo Contest</Text>
            </View>
            <View style={{ width: '100%' }}>
                <ListComponent />


            </View >

            <View style={{ width: '100%', marginTop: 10, paddingRight: 10, backgroundColor: 'transparent', marginLeft: 20 }}>
                <FlatList

                    data={data1}

                    renderItem={({ item }) => {
                        console.log("hiiiiii")
                        console.log("itemmmm", item)
                        return (
                            <View style={{ marginRight: 5 }}>
                                <Button title="hello" variant={item.selected ? "filled" : "outlined"}


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
            <View style={styles.profilecontain}>
                <Image source={profile} style={{ width: 50, height: 50, borderRadius: 150 }} />
                <FeatherIcon name="more-horizontal" size={25} />
            </View>
            <Text>Striking imagery that features one primary color.</Text>
            <View style={styles.footer}>
                <Image source={camera} style={{
                    width: 150, height: 80, borderRadius: 10
                    , position: 'absolute', left: 100, top: 25
                }} />
                <View style={styles.bottom}>
                    <AntDesigns name="heart" color={CONSTANT.App.colors.buttonColor} size={20} />
                    <FeatherIcon name="message-circle" size={20} color={'grey'} />
                    <FontAwesome name="share" size={20} color={'grey'} />

                </View>


            </View>
            {/* <View style={{backgroundColor:'transparent'}}> */}

            {/* </View> */}
            <View style={{
                width: '100%',
                backgroundColor: 'grey'
            }}>

            </View>


        </ScrollView>



    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%'
    },
    searchView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,


    },
    txtStyle: {
        width: '80%',
        borderBottomWidth: 1,
        height: 50
    },
    profilecontain: {
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    footer: {
        backgroundColor: 'rgb(51, 103, 214)',
        width: '100%',
        height: 140
    },
    bottom: {
        width: 250,
        position: 'absolute',
        top: 120, left: 60, flexDirection: 'row',
        justifyContent: 'space-between', height: 50,
        borderRadius: 10, alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 15,
        paddingRight: 15,
        zIndex: 3,
        elevation: 3,




    }
})
export default HomeScreen;


















