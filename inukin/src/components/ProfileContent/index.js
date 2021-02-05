import React from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import { Avatar } from 'react-native-paper';

import CustomInput from '../CustomInput';
import Button from '../Button';
import CONSTANT from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';



const DATA = [
    {
        avatar: CONSTANT.App.staticImages.rahul,
        name: "Rahul Sharma",
        email: "@rahul_sharma",
        details: "Follow"

    },
    {
        avatar: CONSTANT.App.staticImages.maud,
        name: "Maud Dunn",
        email: "@dunnmaud",
        details: "Following"
    },
    {
        avatar: CONSTANT.App.staticImages.rachma,
        name: "Rachma Griffin",
        email: "@griffin",
        details: "Follow"
    }, {
        avatar: CONSTANT.App.staticImages.annabelle,
        name: "Annabelle",
        email: "@bellanna",
        details: "Following"
    }
];


const ProfileContent = ({ qty_followers, profile, navigation, account, follow }) => {
    const getDetails = profile ? qty_followers + " Followers" : (follow ? " Followers " : " Account");
    return (
        <View style={{ width: '100%', alignItems: 'center' }}>
            <View style={{ width: '80%', marginTop: 20 }}>
                <Text style={{
                    color: CONSTANT.App.colors.i_solidblue,
                    fontFamily: CONSTANT.App.fonts.DMSANSBOLD,
                    fontSize: 14
                }}>{getDetails}</Text>
                {
                    account && <Text style={{ color: CONSTANT.App.colors.i_textGrey, fontSize: 12, fontFamily: CONSTANT.App.fonts.DMSANSREGULAR }}>Edit and manage your account details</Text>
                }
            </View>

            {
                (profile || follow) && <CustomInput
                    leftIcon="search"
                    style={{ width: '80%' }}
                    plcholder="search followers"
                    onTextChange={(value) => { setSearch(value) }}
                    leftIconColor={CONSTANT.App.colors.i_lightGrey}
                />
            }

            {
                (profile || follow) && <View style={{ width: '80%', paddingBottom: '70%' }}>
                    <FlatList
                        data={DATA}
                        keyExtractor={(item) => item.email}
                        renderItem={({ item }) => {
                            return <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(CONSTANT.App.screenNames.profileFollow, {})
                                }}
                                style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginTop: 20 }}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <Avatar.Image source={item.avatar} />
                                    <View style={{ marginLeft: 20, marginTop: 10 }}>
                                        <Text style={styles.itemName}>{item.name}</Text>
                                        <Text style={styles.itemEmail}>{item.email}</Text>
                                    </View>
                                </View>
                                <Button
                                    onPress={() => { }}
                                    variant={item.details == "Follow" ? "filled" : "outlined"}
                                    title={item.details}
                                    style={{ width: 83, height: 32, paddingHorizontal: 8, paddingVertical: 5, borderRadius: 10, }}
                                    textStyle={{ fontFamily: CONSTANT.App.fonts.medium, fontSize: 12 }}
                                />

                            </TouchableOpacity>
                        }}
                    />
                </View>
            }


            {
                account && <View style={{ width: '80%', backgroundColor: CONSTANT.App.colors.i_backgroundAccount, padding: 20, marginTop: 20, borderRadius: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={CONSTANT.App.staticImages.avatar} size={40} />
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={{ color: CONSTANT.App.colors.i_lightBlack, fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 12 }}>Manohar Negi</Text>
                                <Text style={{ color: CONSTANT.App.colors.i_textGrey, fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 10 }}>@mnegi</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ width: 40, height: 40 }}>
                            <Image source={CONSTANT.App.staticImages.rightArrow}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* <Avatar.Image source={CONSTANT.App.staticImages.avatar} size={40} /> */}
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={{ color: CONSTANT.App.colors.i_textGrey, fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 12 }}>Email</Text>
                                <Text style={{ color: CONSTANT.App.colors.i_lightBlack, fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 12 }}>manoharnegi@gmail.com</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ width: 40, height: 40 }}>
                            <Image source={CONSTANT.App.staticImages.rightArrow}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* <Avatar.Image source={CONSTANT.App.staticImages.avatar} size={40} /> */}
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
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* <Avatar.Image source={CONSTANT.App.staticImages.avatar} size={40} /> */}
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={{ color: CONSTANT.App.colors.i_textGrey, fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 12 }}>Location</Text>
                                <Text style={{ color: CONSTANT.App.colors.i_lightBlack, fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 12 }}>Uttarakhand</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ width: 40, height: 40 }}>
                            <Image source={CONSTANT.App.staticImages.rightArrow}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
            }

            {
                account && <Button
                    onPress={() => { }}
                    variant="filled"
                    title="Save Change"
                    style={{ width: '80%', height: 44, paddingHorizontal: 4, paddingVertical: 1, borderRadius: 15, marginTop: 35 }}
                    textStyle={{ fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 14, color: CONSTANT.App.colors.i_background }}
                />
            }



        </View>
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
