import React, { useState, useEffect } from 'react';
import { TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FeatherIcon } from '../../constants/Icons'
import CONSTANT from '../../constants';
const CustomInput = ({
    plcholder,
    rightIcon,
    leftIcon,
    isSecure,
    onTextChange,
    onRightIconClick,
    errorMsg
}) => {


    const [width, setWidth] = useState('')

    useEffect(() => {

    }, [])

    return (
        <>
         {
                errorMsg !== "" ?
                    <Text style={{marginLeft:10,color:'red'}}>{errorMsg}</Text>
                    : null
            }
            <View style={styles.root}>

                {
                    leftIcon &&
                    <View style={{ position: 'absolute', left: 10 }}>
                        <FeatherIcon name={leftIcon} size={20} color={CONSTANT.App.colors.placeholderTextColor} />
                    </View>
                }

                <TextInput
                    placeholder={plcholder}
                    secureTextEntry={isSecure ? true : false}
                    placeholderTextColor={CONSTANT.App.colors.placeholderColor}
                    onChangeText={(value) => onTextChange(value)}
                    style={{
                        height: '100%',
                        width: '100%',
                        paddingLeft: leftIcon ? 30 : 10
                    }}
                />

                {
                    rightIcon &&
                    <TouchableOpacity onPress={onRightIconClick} style={{ position: 'absolute', right: 15 }}>
                        <FeatherIcon name={rightIcon} size={20} color={CONSTANT.App.colors.placeholderColor} />
                    </TouchableOpacity>
                }



            </View>
           
        </>
    )
}


const styles = StyleSheet.create({
    root: {
        backgroundColor: CONSTANT.App.colors.inputBackground,
        height: 60,
        padding: 5,
        borderRadius: 15,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    }
})


export default CustomInput;