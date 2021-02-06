import React from 'react';
import { View, StyleSheet, ScrollView, Text, FlatList, Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import CustomHeader from '../../components/CustomHeader';
import Button from '../../components/Button';
import CONSTANT from '../../constants';

const ProfileList = () => {
    return (

        <View style={{ marginTop: 20, width: '100%', justifyContent:'center', alignItems:'center' }}>
            <View style={{
                width: '80%',
                flexDirection: 'row',

                justifyContent:'space-between'
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Image source={CONSTANT.App.staticImages.avatar}
                        style={{ width: 36, height: 36.39 }}
                    />
                    <View style={{marginLeft: 10}}>
                        <Text style={{
                            color: CONSTANT.App.colors.i_solidblue,
                            fontFamily: CONSTANT.App.fonts.DMSANSMEDIUM,
                            fontSize: 14
                        }}>Ian Payne</Text>
                        <Text
                            style={{
                                color: CONSTANT.App.colors.i_time,
                                fontFamily: CONSTANT.App.fonts.DMSANSMEDIUM,
                                fontSize: 10
                            }}
                        >5 mins ago</Text>
                    </View>
                </View>
                <Image source={require('../../assets/icons/Icon.png')}
                    style={{ width: 24, height: 27.79 }}
                />
            </View>

            <View style={{
                marginTop: 10,
            }}>
                <Text style={{
                    color: CONSTANT.App.colors.i_solidblue,
                    fontFamily: CONSTANT.App.fonts.DMSANSREGULAR,
                    fontSize: 14,
                }}>Striking imagery that features one primary color.</Text>
            </View>
            <View style={{
                width: '100%',
                height: 230,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
                backgroundColor: CONSTANT.App.colors.i_imageBack
            }}>
                <View style={{
                    width: 185,
                    height: 125
                }}>
                    <Image
                        source={require('../../assets/icons/camera.png')}
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                    />
                </View>
            </View>
            <View style={{
                width: 196,
                height: 44,
                backgroundColor: CONSTANT.App.colors.i_background,
                borderRadius: 10,
                // left: '40%',
                bottom: 23,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assets/icons/heart.png')}
                        style={{
                            width: 13.5,
                            height: 12.09
                        }} />
                    <Text style={{
                        fontFamily: CONSTANT.App.fonts.DMSANSMEDIUM,
                        color: CONSTANT.App.colors.i_solidblue,
                        fontSize: 12
                    }}>1.2K</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assets/icons/comment.png')}
                        style={{
                            width: 13.5,
                            height: 12.09
                        }} />
                    <Text style={{
                        fontFamily: CONSTANT.App.fonts.DMSANSMEDIUM,
                        color: CONSTANT.App.colors.i_solidblue,
                        fontSize: 12
                    }}>450</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assets/icons/share.png')}
                        style={{
                            width: 13.5,
                            height: 12.09
                        }} />
                    <Text style={{
                        fontFamily: CONSTANT.App.fonts.DMSANSMEDIUM,
                        color: CONSTANT.App.colors.i_solidblue,
                        fontSize: 12
                    }}>Share</Text>
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({});

export default ProfileList;