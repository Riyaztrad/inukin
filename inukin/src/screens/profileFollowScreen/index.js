import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView,ActivityIndicator, SafeAreaView, FlatList } from 'react-native';


import ProfileHeader from '../../components/ProfileHeader';
import ProfileContent from '../../components/ProfileContent';
import CustomHeader from '../../components/CustomHeader';
import CONSTANT from '../../constants';
import { ProfileApi, ProfileDetail ,getFollowersAndFollowing,FollowerDetail} from '../../backend/ServiceApi'
const ProfileFollowScreen = ({ navigation, route }) => {

    const [profiles, setProfiles] = useState({})
    const [userprofile, setUserprofile] = useState({});
    const [isFetch, setFetch] = useState(true)
    const [followerList, setFollowerList] = useState([])
    const [followingList, setFollowingList] = useState([])
    const [countfollowing, setCountFollowing] = useState(0)
    const [countfollower, setCountFollower] = useState(0)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        console.log('route', route)
        GetUsers()
        setUserprofile(route.params.item)
        GetFollowersUsers(route.params.item._id)

    }, [loading])

    const GetUsersDetil = async () => {
        var result = await ProfileDetail();
        console.log("result", result)
        setUserprofile(result)

    }


    const GetFollowersUsers = async (id) => {
       
        var result = await getFollowersAndFollowing(id);
        setProfiles(result)
        console.log("GetFollowersUsers", result)
        if (result.followerListJson) {

            if (result.followerListJson.length > 0) {
                let temp1 = []
                setCountFollower(result.followerListJson.length)
                console.log("result.followingListJson.length", result.followerListJson)
                result.followerListJson.map(async (u, i) => {
                    let isExist = followerList.find(x=>x._id===u.userId)
                    let obj = await GetFUsersDetil(u.userId)
                    console.log("obj", obj,isExist)
                    temp1.push(obj)
                    if(!isExist)
                    followerList.push(obj)
                })
                console.log("temp", followerList)
            }
            // setFollowerList(result.followerListJson)
        }
        
        if (result.followingListJson) {
            if (result.followingListJson.length > 0) {
                setCountFollowing(result.followingListJson.length)
                let temp = []
                // if (!isExist) {
                    result.followingListJson.map(async (u, i) => {
                      
                        console.log("result.followingListJson.length", isExist)
                        let isExist = followerList.find(x=>x._id===u.userId)
                        let obj = await GetFUsersDetil(u.userId)
                        console.log("obj", obj)
                        temp.push(obj)
                        if(!isExist)
                        followingList.push(obj)
                    })
                    console.log("temp", followingList)
                // }

            }

        }
        setLoading(false)

    }


    const GetFUsersDetil = async (id) => {
        var result = await FollowerDetail(id);
        console.log("GetUsersDetil", result)
        return result
    }


    const GetUsers = async () => {
        
        var result = await ProfileApi();
        console.log("setProfiles", result)
        setProfiles(result)
        setFetch(false)
    }

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
                <CustomHeader
                    icon={CONSTANT.App.staticImages.back}
                    navigation={navigation}
                    onPress={() => { navigation.goBack() }}
                    name={"Profile"}
                />
                {
                    !isFetch ?
                        <>

                            <ProfileHeader
                                avatar={CONSTANT.App.staticImages.avatar}
                                name={userprofile.name}
                                email={"@" + userprofile.username}
                                points={"500"}
                                rightBtn
                                isQty
                                follow
                                qty_photos={"128"}
                                qty_followers={"120"}
                                qty_following={"171"}
                                onPress={() => { }}
                                navigation={navigation}
                            />

                            <View style={styles.horizontalBar} />

                            <ProfileContent
                                follow
                                // userprofile={userprofile}
                                // navigation={navigation}
                                qty_followers={"200"}
                                // profiles={profiles}

                                navigation={navigation}

                                qty_followers={"200"}
                                profiles={{data:followerList}}
                                ishandleMorepage={ProfileApi}
                                // isloading={loading}
                                userprofile={userprofile}
                            />

                        </> :
                        <View style={{ justifyContent: 'center', alignContent: 'center', height: '90%' }}>
                            <ActivityIndicator size="large" color={CONSTANT.App.colors.i_red} />
                        </View>

                }
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


export default ProfileFollowScreen;