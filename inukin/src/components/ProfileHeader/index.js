import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import CONSTANT from '../../constants';
import Button from '../Button';

const ProfileHeader = ({ getListType, avatar, tabType, name, email, points, rightBtn, onPress, isQty, qty_photos, qty_following, qty_followers, profile, account, follow, navigation, }) => {

    const [type, setType] = useState(tabType)
    const getType = (text) => {
        setType(text)
        getListType(text)
    }
    return (
        <View style={styles.header}>
            <View style={styles.first}>
                <Avatar.Image source={avatar} size={80} />
                {profile &&
                    <TouchableOpacity style={styles.edit}

                        onPress={onPress}>
                        <Avatar.Image size={25} source={CONSTANT.App.staticImages.edit} />
                    </TouchableOpacity>
                }
                <View style={styles.details}>
                    <Text style={styles.name}>{name.length > 15 ? name.substring(0, 15) + "..." : name}</Text>
                    <Text style={styles.email}>{email}</Text>
                    {(account || profile) && <View style={styles.points}>
                        <Avatar.Image source={CONSTANT.App.staticImages.star} size={15} />
                        <Text style={styles.point}>{points} points</Text>
                        {profile ? <Button
                            variant="filled"
                            title="Add more points"
                            style={{ width: 76, height: 18, paddingHorizontal: 4, paddingVertical: 1, borderRadius: 5, marginLeft: 10 }}
                            textStyle={{ fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 8 }}
                        /> : <Button
                            onPress={() => { }}
                            variant="filled"
                            title="Following"
                            style={{ width: 76, height: 18, paddingHorizontal: 4, paddingVertical: 1, borderRadius: 5, marginLeft: 10 }}
                            textStyle={{ fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 8 }}
                        />}
                    </View>}

                    {follow && <View style={[styles.points, { marginLeft: 0, }]}>
                        <Button
                            onPress={() => { }}
                            variant="filled"
                            title="Follow"
                            style={{ width: 80, height: 30, paddingHorizontal: 4, paddingVertical: 1, borderRadius: 8, marginLeft: 10 }}
                            textStyle={{ fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 12 }}
                        />
                        <View style={{ width: 30, height: 30, justifyContent: 'center', marginLeft: 5 }}>
                            <Image source={CONSTANT.App.staticImages.message} style={{ width: 18, height: 18 }} />
                        </View>
                    </View>}
                </View>
            </View>
            {
                profile && <View style={styles.second}>
                    <TouchableOpacity style={[styles.description, {
                        borderRightWidth: 1,
                        borderRightColor: CONSTANT.App.colors.i_ultraLight, backgroundColor: type === 'photos' ? CONSTANT.App.colors.i_ultraLight : CONSTANT.App.colors.i_grey
                    }]}
                        onPress={() => {
                            getType("photos")
                        }}
                    >
                        <Text style={styles.qty}>{qty_photos}</Text>
                        <Text style={styles.desc}>People</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.description, {
                        borderRightWidth: 1,
                        borderRightColor: CONSTANT.App.colors.i_ultraLight, backgroundColor: type === 'Followers' ? CONSTANT.App.colors.i_ultraLight : CONSTANT.App.colors.i_grey
                    }]}
                        onPress={() => {
                            getType("Followers")
                        }}>
                        <Text style={styles.qty}>{qty_followers}</Text>
                        <Text style={styles.desc}>Followers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.description, { backgroundColor: type === 'Followings' ? CONSTANT.App.colors.i_ultraLight : CONSTANT.App.colors.i_grey }]}
                        onPress={() => {
                            getType("Followings")
                        }}>
                        <Text style={styles.qty}>{qty_following}</Text>
                        <Text style={styles.desc}>Followings</Text>
                    </TouchableOpacity>
                </View>
            }
        </View >
    );
};

const styles = StyleSheet.create({
    header: { width: '100%', alignItems: 'center', padding: 10 },
    first: {
        flexDirection: 'row', width: '100%',
        // paddingVertical:5

    },
    edit: {
        position: 'absolute',
        top: 55,
        left: 55,
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: 'flex-start',
        alignItems: 'center', padding: 1,
    },
    details: { width: '100%', height: 66, paddingTop: 10, justifyContent: 'flex-start', paddingHorizontal: 20 },
    name: {
        color: CONSTANT.App.colors.i_solidblue,
        fontSize: 20,
        width: '100%',
        fontFamily: CONSTANT.App.fonts.DMSANSMEDIUM
    },
    email: {
        color: CONSTANT.App.colors.i_superGrey,
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR,
        fontSize: 14,
    },
    points: { flexDirection: 'row', alignItems: 'center', paddingTop: 10 },
    point: {
        color: CONSTANT.App.colors.i_yellow,
        fontSize: 14,
        marginLeft: 10,
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR
    },

    second: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: CONSTANT.App.colors.i_grey,
        justifyContent: 'center', alignItems: 'center', padding: 10, borderRadius: 10,
        // backgroundColor:'red',
        marginTop: 15

    },
    description: {
        width: '30%',
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    qty: {
        color: CONSTANT.App.colors.i_lightBlack,
        fontFamily: CONSTANT.App.fonts.DMSANSMEDIUM,
        fontSize: 20
    },
    desc: {
        color: CONSTANT.App.colors.i_lightGrey,
        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR,
        fontSize: 12
    },
    last_description: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default ProfileHeader;