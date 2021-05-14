import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import CustomInput from '../CustomInput';
import CONSTANT from '../../constants';

const CustomHeader = ({ navigation, onPress, icon, name, home ,style}) => {
    const [search, setSearch] = useState('');
    const [type,setType] = useState('')
  
    return (
        <View style={styles.header}>
            <View style={{ width: '100%', justifyContent: 'center' }}>
                {!home && <View style={{flexDirection:'row', width:'100%',alignItems:'center', padding: 15}}>
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
                            style={[style,{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center',
                            marginRight:10 }]}
                        >
                            <Image
                                source={icon}
                                style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                        <CustomInput
                            leftIcon="search"
                            style={{ width: '80%', borderRadius: 20 ,marginLeft:1 }}
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
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'red',
        backgroundColor: CONSTANT.App.colors.i_background,
    },
    home: {
        width: '100%',
        marginTop:20,
        // padding:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    }
});

export default CustomHeader;