import React from 'react';
import { View, StyleSheet, ScrollView, Text, FlatList, Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import CustomHeader from '../../components/CustomHeader';
import Button from '../../components/Button';
import CONSTANT from '../../constants';
import ProfileList from '../../components/ProfileList';

const DATA = [
    {
        name: 'first',
        icon: require('../../assets/icons/Image.png')
    },
    {
        name: 'Second',
        icon: require('../../assets/icons/image2.png')
    },
    {
        name: 'Third',
        icon: require('../../assets/icons/image2.png')
    },
    {
        name: 'Fouth',
        icon: require('../../assets/icons/image2.png')
    }
]

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




const HomeScreen = ({ navigation }) => {


    const renderPhotoItem = ({ item }) => {
        return (
            <View style={{ height: 136, width: 237, marginHorizontal: 10 }}>
                <Image source={item.icon}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </View>
        );
    }

    return (
        <View style={styles.home}>
            <CustomHeader
                home
                icon={require('../../assets/icons/menu.png')}
                navigation={navigation}
                onPress={() => { }}
                name={"Profile"}
            />
            <ScrollView>
                <View style={{
                    width: '80%',
                    marginTop: 10,
                    marginLeft: '10%'
                }}>
                    <Text style={{
                        color: CONSTANT.App.colors.i_solidblue,
                        fontFamily: CONSTANT.App.fonts.DMSANSBOLD,
                        fontSize: 14
                    }}>Photo Contest</Text>
                </View>

                <View style={{ width: '100%', paddingTop: 20 }}>
                    <FlatList
                        data={DATA}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderPhotoItem}
                    />
                </View>

                <View style={{
                    width: '100%',
                    height: 60,
                    marginTop: 20,
                    backgroundColor: CONSTANT.App.colors.i_inputBackground,
                    paddingTop: 15,

                }}>

                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={SCROLLBUTTON}
                        key={(item) => { item.name }}
                        renderItem={(itemData) => {
                            return (
                                <Button
                                    onPress={() => { }}
                                    variant={itemData.item.variant}
                                    title={itemData.item.name}
                                    style={{
                                        height: 28,
                                        marginHorizontal: 10,
                                        paddingHorizontal: 10,
                                        paddingVertical: 10,
                                        borderRadius: 8,
                                        marginLeft: 10,
                                        justifyContent: 'center',
                                        alignItem: 'center',
                                        borderColor: itemData.item.variant === 'outlined' ? CONSTANT.App.colors.i_outline : ''
                                    }}
                                    textStyle={{
                                        fontFamily: CONSTANT.App.fonts.DMSANSREGULAR,
                                        fontSize: 12,
                                        color: itemData.item.variant === 'outlined' ? CONSTANT.App.colors.i_outline : CONSTANT.App.colors.i_background
                                    }}
                                />
                            );
                        }}
                    />

                </View>

                <ProfileList />

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        width: '100%',
        height: '100%',
        backgroundColor: CONSTANT.App.colors.i_background,
        justifyContent: 'center'
    }
});

export default HomeScreen;




















