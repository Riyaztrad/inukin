import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text, ScrollView, SafeAreaView, FlatList, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


import ProfileHeader from '../../components/ProfileHeader';
import ProfileContent from '../../components/ProfileContent';
import CustomHeader from '../../components/CustomHeader';
import CONSTANT from '../../constants';
import {useSelector, useDispatch} from 'react-redux';
import {ProfileApi, ProfileDetail, getFollowersAndFollowing, FollowerDetail} from '../../backend/ServiceApi'
import {setUserInfo} from './actions'
const ProfileScreen = ({navigation}) => {
    const storeData = useSelector(state => state.userInfoReducer)
    const disptach = useDispatch()
    const [profiles, setProfiles] = useState([])
    const [users, setUsers] = useState([])
    const [followerList, setFollowerList] = useState([])
    const [followingList, setFollowingList] = useState([])
    const [countfollowing, setCountFollowing] = useState(0)
    const [countfollower, setCountFollower] = useState(0)
    const [userprofile, setUserprofile] = useState({})
    const [isProfile, setIsProfile] = useState(true);
    const [isAccount, setIsAccount] = useState(false)
    const [isPhoto, setPhoto] = useState(true)

    const [page, setPage] = useState(1);
    const [results, setResults] = useState(20);
    const [loading, setLoading] = useState(false);
    const [isFetch, setFetch] = useState(true)
    const [type, setType] = useState('photos')
    console.log("storeData", storeData)


    const images = [
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg'
        },
        {
            image: 'https://i.pinimg.com/originals/cb/16/bb/cb16bb284a2a80c75041c80ba63e62d3.jpg'
        },
        {
            image: 'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy82NDYxODUyL29yaWdpbi5qcGciLCJleHBpcmVzX2F0IjoxNjU3NTU5OTAxfQ.a2wq_xrlTIAmSIdKiVuDWYWxHgBSkaqEAFMrM7p04OI/img.jpg?width=980'
        },
        {
            image: 'https://media.gettyimages.com/photos/connection-with-nature-picture-id1174472274?s=612x612'
        },
        {
            image: 'https://allen-kentphotography.com/wp-content/uploads/2016/10/alley-0004-730x487.jpg'
        },
        {
            image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-907914534-1590070809.jpg'
        },
        {
            image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/325466_1100-800x825.jpg'
        },
        {
            image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/0C5C/production/_112046130_sun_getty.jpg'
        },
        {
            image: 'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/10/GettyImages-700709517_header-1024x575.jpg?w=1155&h=1528'
        },
        {
            image: 'https://aniportalimages.s3.amazonaws.com/media/details/Rakayet_Ul_Karim_Rakim_oct21_iYFyRPH.jpg'
        }
    ]




    useEffect(() => {
        GetFollowersUsers()
        GetUsersDetil()
        getUsers()
    }, [])

    const GetFollowersUsers = async () => {
        var result = await getFollowersAndFollowing();
        setProfiles(result)
        console.log("GetFollowersUsers", result)
        if (result.followerListJson) {

            if (result.followerListJson.length > 0) {
                let temp1 = []
                setCountFollower(result.followerListJson.length)
                console.log("result.followingListJson.length", result.followerListJson)
                result.followerListJson.map(async (u, i) => {
                    let obj = await GetFUsersDetil(u.followingId)
                    console.log("obj", obj)
                    temp1.push(obj)
                    followerList.push(obj)
                })
                console.log("temp", temp1)
            }
            // setFollowerList(result.followerListJson)
        }
        if (result.followingListJson) {
            if (result.followingListJson.length > 0) {
                let temp = []
                setCountFollowing(result.followingListJson.length)



                // if (!isExist) {
                result.followingListJson.map(async (u, i) => {
                    let isExist = followingList.find(x => x._id == u.followingId)
                    console.log("result.followingListJson.length", isExist)
                    let obj = await GetFUsersDetil(u.followingId)
                    // console.log("obj", obj)
                    temp.push(obj)
                    followingList.push(obj)
                })
                // console.log("temp", temp)
                // }

            }

        }

    }

    const getUsers = async () => {

        setPage(page + 1)
        let result = await ProfileApi(page);
        console.log("getUsers", result)

        setUsers(result)
    }

    const GetUsersDetil = async () => {
        var result = await ProfileDetail();
        console.log("GetUsersDetil", result)
        setUserprofile(result)
        disptach(setUserInfo(result))
        setFetch(false)
    }


    const GetFUsersDetil = async (id) => {
        var result = await FollowerDetail(id);
        console.log("GetUsersDetil", result)
        return result
    }




    const getListType = (tp) => {
        console.log("tp", tp)
        // if (tp === 'Followings' || tp === 'Followers') {

        //     GetFollowersUsers()
        // }
        setType(tp)
    }
    const TypedList = () => {
        if (type === 'photos') {
            return (
                isPhoto ?
                    <View style={{flex: 1}}>
                        <FlatList
                            data={images}
                            numColumns={2}
                            renderItem={({item, index}) => {
                                console.log("item", item)
                                return (

                                    index === 0 ?
                                        <>
                                            <View style={{height: 180, width: "99%", margin: 2, borderRadius: 10}}>
                                                <Image
                                                    source={{uri: item.image}}
                                                    style={{height: '100%', width: '100%', borderRadius: 10}}
                                                />
                                            </View>
                                        
                                        </>
                                        :


                                 
                                            <View style={{height: 120, width: "49%", margin: 2, borderRadius: 10}}>
                                                <Image
                                                    source={{uri: item.image}}
                                                    style={{height: '100%', width: '100%', borderRadius: 10}}
                                                />
                                            </View>

                                )
                            }}

                        />
                    </View>
                    :
                    <ProfileContent
                        navigation={navigation}
                        profile={isProfile}
                        account={isAccount}
                        qty_followers={users.total}
                        type="People"
                        profiles={users}
                        ishandleMorepage={getUsers}
                        isloading={loading}
                        userprofile={userprofile}
                    />
            )
        } else if (type === 'Followers') {
            return (

                <ProfileContent
                    navigation={navigation}
                    profile={isProfile}
                    account={isAccount}
                    qty_followers={countfollower}
                    type="Followers"
                    btnType='Follow1'
                    profiles={{data: followerList}}
                    ishandleMorepage={ProfileApi}
                    isloading={loading}
                    userprofile={userprofile}
                />
            )
        } else if (type === 'Followings') {
            console.log("followingList", followingList)


            return (
                <ProfileContent
                    navigation={navigation}
                    profile={isProfile}
                    account={isAccount}
                    qty_followers={countfollowing}
                    type="Followings"
                    btnType='Follow'
                    profiles={{data: followingList}}
                    ishandleMorepage={ProfileApi}
                    isloading={loading}
                    userprofile={userprofile}
                />
            )
        }
    }

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.profile}
                keyboardShouldPersistTaps={true}>

                <CustomHeader

                    icon={CONSTANT.App.staticImages.back}
                    navigation={navigation}
                    onPress={() => {navigation.goBack()}}
                    name={"Profile"}
                />

                {

                    !isFetch ?
                        <>

                            <ProfileHeader
                                getListType={getListType}
                                avatar={CONSTANT.App.staticImages.avatar}
                                name={storeData.data.name}
                                email={"@" + storeData.data.username}
                                points={"500"}
                                rightBtn
                                tabType={type}
                                isQty
                                profile
                                qty_photos={"128"}
                                qty_followers={countfollower}
                                qty_following={countfollowing}
                                onPress={() => {
                                    setIsAccount(!isAccount)
                                    setIsProfile(!isProfile)
                                }}
                                navigation={navigation}
                            />



                            <View style={styles.horizontalBar} />
                            {TypedList()}

                        </>
                        :
                        <View style={{justifyContent: 'center', alignContent: 'center', height: '90%'}}>

                            <ActivityIndicator size="large" color={CONSTANT.App.colors.i_red} />
                        </View>
                }
            </ScrollView >
        </SafeAreaView>
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


export default ProfileScreen;