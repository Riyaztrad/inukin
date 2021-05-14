import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, FlatList, Image, ActivityIndicator, TextInput } from 'react-native';
import { Avatar } from 'react-native-paper';

import CustomInput from '../CustomInput';
import Button from '../Button';
import CONSTANT from '../../constants';
import Geolocation from '@react-native-community/geolocation';
import { UpdateProfile, followUser } from '../../backend/ServiceApi'
import Snackbar from 'react-native-snackbar';
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from '../../screens/profileScreen/actions'


const ProfileContent = ({ qty_followers, type, profile,btnType, navigation, account, follow, profiles, userprofile,
    ishandleMorepage, isloading }) => {
    console.log("type", type)
    const getDetails = profile ? qty_followers + ' ' + type : (follow ? " Followers " : " Account");
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [search, setSearch] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)
    const [location, setLocation] = useState('Jharkhand')
    // const[pasge,setPage]=useState(1)

    useEffect(() => {
        setName(userprofile.name)
        setMobile(userprofile.mobile)
    }, [userprofile])



    const renderfooter = () => {
        return (
            isloading ?
                <View>
                    <ActivityIndicator size="large" />
                </View>
                : null
        )
    }

    const updateProfile = async () => {
        Geolocation.getCurrentPosition(async (info) => {
            setIsSubmit(true)
            var geolocation = {
                type: "Point",
                coordinates: [info.coords.latitude, info.coords.longitude]
            }
            var data = {
                portfolioId: userprofile.portfolioId,
                apiKey: userprofile.apiKey,
                name: name,
                email: "string",
                userName: userprofile.username,
                password: userprofile.hashedPassword,
                company: "string",
                location: geolocation,
                "avtar": "string",
                "bio": "string",
                mobileCountryCode: userprofile.mobileCountryCode,
                mobile: userprofile.mobile,
                profileType: userprofile.profileType,
                "referralCode": "string"
            }
            console.log("update data", data)
            var response = await UpdateProfile(data);
            if (response.error === undefined) {
                setName(response.name)
                setMobile(response.mobile)
                dispatch(setUserInfo(response))
                Snackbar.show({
                    text: "Update successfully",
                    action: {
                        title: 'OK',
                        color: 'white'
                    }
                });
            } else {
                Snackbar.show({
                    text: "Something went wrong",
                    action: {
                        title: 'OK',
                        color: 'white'
                    }
                });
            }
            setIsSubmit(false)
        });

    }

    const followuser = (id) => {
        followUser(id);
    }

    return (
        <ScrollView contentContainerStyle={{ width: '100%', paddingRight: 15, paddingLeft: 15 }}
            keyboardShouldPersistTaps={true}

        >
            <View style={{ alignItems: 'center' }}>
                <View style={{ width: '100%', marginTop: 10 }}>
                    <Text style={{
                        color: CONSTANT.App.colors.i_solidblue,
                        fontFamily: CONSTANT.App.fonts.DMSANSBOLD,
                        fontSize: 14,
                        marginBottom: 10
                    }}>{getDetails}</Text>
                    {
                        account && <Text style={{ color: CONSTANT.App.colors.i_textGrey, fontSize: 12, fontFamily: CONSTANT.App.fonts.DMSANSREGULAR }}>Edit and manage your account details</Text>
                    }
                </View>


                {
                    (profile || follow) && <CustomInput
                        leftIcon="search"
                        style={{ width: '100%' }}
                        plcholder="search followers"
                        onTextChange={(value) => { setSearch(value) }}
                        leftIconColor={CONSTANT.App.colors.i_lightGrey}
                    />
                }

                {
                    (profile || follow) && <View style={{ flex: 1 }}>
                        <FlatList
                            //hello
                            data={profiles.data}
                            // style={{paddingBottom:150}}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                              

                                return <TouchableOpacity key={index}
                                    onPress={() => {
                                        navigation.navigate(CONSTANT.App.screenNames.profileFollow, { item })
                                    }}
                                    style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginTop: 20 }}
                                >

                                    <View style={{ flexDirection: 'row' }}>
                                        <Avatar.Image source={CONSTANT.App.staticImages.maud} />
                                        <View style={{ marginLeft: 20, marginTop: 10 }}>
                                            <Text style={styles.itemName}>{item.name.length > 15 ? item.name.substring(0, 10) + "..." : item.name}</Text>
                                            <Text style={styles.itemEmail}>{item.username}</Text>
                                        </View>
                                    </View>
                                    <Button
                                        onPress={() => {
                                            console.log("item", item)
                                            followuser(item._id)
                                        }}
                                        variant={"Follow" === btnType ? "filled" : "outlined"}
                                        title={"Follow"}
                                        style={{ width: 83, height: 32, paddingHorizontal: 8, paddingVertical: 5, borderRadius: 10, }}
                                        textStyle={{ fontFamily: CONSTANT.App.fonts.medium, fontSize: 12 }}
                                    />

                                </TouchableOpacity>

                            }}
                            keyExtractor={(item, index) => index.toString()}
                            ListFooterComponent={renderfooter}
                            onEndReached={() => { ishandleMorepage() }}
                            onEndReachedThreshold={0.5}

                        />
                    </View>
                }


                {
                    account && <View style={{ width: '100%', backgroundColor: CONSTANT.App.colors.i_backgroundAccount, padding: 20, marginTop: 20, borderRadius: 20 }}>
                        <Avatar.Image source={CONSTANT.App.staticImages.avatar} size={40} />
                        <Text style={{ color: CONSTANT.App.colors.i_textGrey, fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 10 }}>@{userprofile.username}</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                <View style={{ width: '100%', justifyContent: 'center' }}>

                                    <TextInput style={{ backgroundColor: '#fff', width: '100%', }}
                                        value={name}
                                        onChangeText={(text) => setName(text)}
                                        placeholder="Name" />
                                    {/* <Text style={{ color: CONSTANT.App.colors.i_lightBlack, fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 12 }}>{userprofile.name}</Text>    */}

                                </View>
                            </View>
                            {/* <TouchableOpacity style={{ width: 40, height: 40 }}>
                                <Image source={CONSTANT.App.staticImages.rightArrow}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>
                        
                         */}
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                {/* <Avatar.Image source={CONSTANT.App.staticImages.avatar} size={40} /> */}
                                <View style={{ width: '100%' }}>
                                    <Text style={{ color: CONSTANT.App.colors.i_textGrey, fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 12 }}>Mobile</Text>
                                    <TextInput style={{ backgroundColor: '#fff', width: '100%', marginTop: 5 }}
                                        value={mobile}
                                        maxLength={10}
                                        keyboardType="number-pad"
                                        onChangeText={(text) => setMobile(text)}
                                        placeholder="mobile" />
                                    {/* <Text style={{ color: CONSTANT.App.colors.i_lightBlack, fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 12 }}>manoharnegi@gmail.com</Text> */}
                                </View>
                            </View>
                            {/* <TouchableOpacity style={{ width: 40, height: 40 }}>
                                <Image source={CONSTANT.App.staticImages.rightArrow}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity> */}
                        </View>

                        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                  <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ color: CONSTANT.App.colors.i_textGrey, fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 12 }}>Phone</Text>
                                    <Text style={{ color: CONSTANT.App.colors.i_lightBlack, fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 12 }}>+91 1234 567 890</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={{ width: 40, height: 40 }}>
                                <Image source={CONSTANT.App.staticImages.rightArrow}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity>
                        </View> */}

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                {/* <Avatar.Image source={CONSTANT.App.staticImages.avatar} size={40} /> */}
                                <View style={{ width: '100%' }}>
                                    {/* <Text style={{ color: CONSTANT.App.colors.i_textGrey, fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 12 }}>Location</Text> */}
                                    {/* <Text style={{ color: CONSTANT.App.colors.i_lightBlack, fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 12 }}>Uttarakhand</Text> */}
                                    <Text style={{ color: CONSTANT.App.colors.i_textGrey, fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 12 }}>Location</Text>
                                    <TextInput style={{ backgroundColor: '#fff', width: '100%', marginTop: 5 }}
                                        value={location}
                                        onChangeText={(text) => setLocation(text)}
                                        placeholder="location" />
                                </View>
                            </View>
                            {/* <TouchableOpacity style={{ width: 40, height: 40 }}>
                                <Image source={CONSTANT.App.staticImages.rightArrow}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </TouchableOpacity> */}
                        </View>

                    </View>
                }

                {
                    account && <Button
                        onPress={() => updateProfile()}
                        variant="filled"
                        title="Save Change"
                        isloading={isSubmit}
                        style={{ width: '80%', height: 44, paddingHorizontal: 4, paddingVertical: 1, borderRadius: 15, marginTop: 35 }}
                        textStyle={{ fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 14, color: CONSTANT.App.colors.i_background }}
                    />
                }


                {/* </ScrollView> */}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    itemName: {
        color: CONSTANT.App.colors.i_black,
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR,
        fontSize: 16
    },
    itemEmail: {
        color: CONSTANT.App.colors.i_nanogrey,
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR,
        fontSize: 10
    }
});

export default ProfileContent;
