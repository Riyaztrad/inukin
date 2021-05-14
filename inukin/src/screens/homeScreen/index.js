import React, { useState, useContext } from 'react';
import {
    View, StyleSheet, ScrollView, Text, FlatList, Image,
    Alert, Modal, Pressable
} from 'react-native';
import { Avatar } from 'react-native-paper';
import CustomHeader from '../../components/CustomHeader';
import Button from '../../components/Button';
import CONSTANT from '../../constants';
import ProfileList from '../../components/ProfileList';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch, batch } from 'react-redux';
import { setUserData } from '../loginScreen/action'
import { useLinkProps } from '@react-navigation/native';
import { AuthContext } from '../../context/authContext'
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

    const [modalVisible, setModalVisible] = useState(false);
    const { logout } = useContext(AuthContext)
    const dispatch = useDispatch()

    const logout1 = async () => {
        logout()
        // await AsyncStorage.clear();
        // dispatch(setUserData(null));
        // navigation.navigate(CONSTANT.App.screenNames.login)
    }
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
            // style={{marginLeft:40,width:100}}
            />
            <ScrollView>
                <View style={{
                    width: '80%',
                    marginTop: 10,
                    marginLeft: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: CONSTANT.App.colors.i_solidblue,
                        fontFamily: CONSTANT.App.fonts.DMSANSBOLD,
                        fontSize: 14
                    }}>Photo Contest</Text>
                    <TouchableOpacity onPress={() => logout1()}>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </View>

                {/* <TouchableOpacity style={{ width: '100%', paddingTop: 20 }}
                onPress={()=>navigation.navigate('Detail')}> */}
                <FlatList
                    style={{ width: '100%', paddingTop: 10 }}
                    data={DATA}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderPhotoItem}
                />
                {/* </TouchableOpacity> */}

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

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <ScrollView style={styles.modalView}>
                                <Text style={styles.modalText}>Hello World!</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                ><Text>Filter</Text>
                                    <Text>texyug</Text>
                                    <Text style={styles.textStyle}>Hide Modal</Text>
                                </Pressable>
                            </ScrollView>
                        </View>
                    </Modal>
                    {/* <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.textStyle}>Show Modal</Text>
                    </Pressable> */}
                </View>


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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        position: 'absolute',
        bottom: -20,
        width: '100%',
        height: 400,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

});

export default HomeScreen;




















