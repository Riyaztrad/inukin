import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import CONSTANT from '../../constants';
import Button from '../Button';

const ProfileHeader = ({ avatar, name, email, points, rightBtn, onPress, isQty, qty_photos, qty_following, qty_followers, profile, account, follow, navigation, }) => {

    return (
        <View style={styles.header}>
            <View style={styles.first}>
                <Avatar.Image source={avatar} size={100} />
                <TouchableOpacity style={styles.edit}>
                    <Avatar.Image size={25} source={CONSTANT.App.staticImages.edit} />
                </TouchableOpacity>
                <View style={styles.details}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.email}>{email}</Text>
                    {(account || profile) && <View style={styles.points}>
                        <Avatar.Image source={CONSTANT.App.staticImages.star} size={15} />
                        <Text style={styles.point}>{points} points</Text>
                        {profile && <Button
                            onPress={() => { }}
                            variant="filled"
                            title="Following"
                            style={{ width: 76, height: 18, paddingHorizontal: 4, paddingVertical: 1, borderRadius: 5, marginLeft: 10 }}
                            textStyle={{ fontFamily: CONSTANT.App.fonts.DMSANSREGULAR, fontSize: 8 }}
                        />}
                    </View>}

                    {follow && <View style={[styles.points, { marginLeft: 0 }]}>
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
                    <View style={styles.description}>
                        <Text style={styles.qty}>{qty_photos}</Text>
                        <Text style={styles.desc}>Photos</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.qty}>{qty_followers}</Text>
                        <Text style={styles.desc}>Followers</Text>
                    </View>
                    <View style={styles.last_description}>
                        <Text style={styles.qty}>{qty_following}</Text>
                        <Text style={styles.desc}>Followings</Text>
                    </View>
                </View>
            }
        </View >
    );
};

const styles = StyleSheet.create({
    header: { width: '80%', alignItems: 'center', marginBottom: 30 },
    first: { flexDirection: 'row', width: '100%', paddingVertical: 20 },
    edit: {
        position: 'absolute',
        top: 95,
        left: 70,
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: 'flex-start',
        alignItems: 'center', padding: 1
    },
    details: { paddingTop: 10, justifyContent: 'flex-start', paddingHorizontal: 20 },
    name: {
        color: CONSTANT.App.colors.i_solidblue,
        fontSize: 20,
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
        justifyContent: 'center', alignItems: 'center', padding: 10, borderRadius: 10
    },
    description: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: CONSTANT.App.colors.i_ultraLight
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