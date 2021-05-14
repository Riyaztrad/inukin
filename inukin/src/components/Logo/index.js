import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const Logo = ({splash }) => {
    return (
        <View style={{ alignItems: 'center',marginBottom:!splash?20:0 }}>
            <Image source={require('../../assets/icons/logo.png')}
                style={{
                    width: 204,
                    height: 50,
                }} />
        </View>
    )
}



export default Logo;