import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { Avatar } from 'react-native-paper';

import ProfileHeader from '../../components/ProfileHeader';
import ProfileContent from '../../components/ProfileContent';
import CONSTANT from '../../constants';

const ProfileAccountScreen = ({ route, navigation }) => {
    const { account } = route.params;
    const [search, setSearch] = useState('');

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




    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.profile}>
                <ProfileHeader
                    avatar={CONSTANT.App.staticImages.avatar}
                    name={"Manohar Negi"}
                    email={"@mnegi"}
                    points={"500"}
                    rightBtn
                    isQty
                    account
                    qty_photos={"128"}
                    qty_followers={"120"}
                    qty_following={"171"}
                    onPress={() => { }}
                    navigation={navigation}
                />

                <View style={styles.horizontalBar} />

                <ProfileContent
                    account
                    navigation={navigation}
                    qty_followers={"200"}
                />


            </ScrollView>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    profile: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: CONSTANT.App.colors.i_background
    },
    horizontalBar: {
        width: '100%',
        borderWidth: 8,
        borderColor: CONSTANT.App.colors.i_ultraLight,
        marginTop: 10
    },

});


export default ProfileAccountScreen;