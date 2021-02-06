import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import CustomInput from '../CustomInput';
import CONSTANT from '../../constants';

const CustomHeader = ({ navigation, onPress, icon, name, home }) => {
    const [search, setSearch] = useState('');
    return (
        <View style={styles.header}>
            <View style={{ width: '80%', justifyContent: 'center' }}>
                {!home && <View style={{flexDirection:'row', width:'100%', padding: 5}}>
                    <TouchableOpacity
                        onPress={onPress}
                        style={{ width: 24, height: 24 }}
                    >
                        <Image
                            source={icon}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </TouchableOpacity>
                    <Text style={{
                       marginLeft: '35%',              
                        color: CONSTANT.App.colors.i_solidblue,
                        fontFamily: CONSTANT.App.fonts.DMSANSMEDIUM,
                        fontSize: 14
                    }}>{name}</Text>
                </View>}


                {
                    home && <View style={styles.home}>
                        <TouchableOpacity
                            onPress={onPress}
                            style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Image
                                source={icon}
                                style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                        <CustomInput
                            leftIcon="search"
                            style={{ width: '90%', borderRadius: 20 , marginTop: 10 }}
                            plcholder="search followers"
                            onTextChange={(value) => { setSearch(value) }}
                            leftIconColor={CONSTANT.App.colors.i_lightGrey}
                        />
                    </View>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CONSTANT.App.colors.i_background,
    },
    home: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default CustomHeader;