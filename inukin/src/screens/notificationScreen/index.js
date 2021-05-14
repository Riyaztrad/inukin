import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CONSTANT from '../../constants';

const NotificationScreen = ({ navigation }) => {
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: CONSTANT.App.colors.i_background }}>
            <CustomHeader
                icon={CONSTANT.App.staticImages.back}
                navigation={navigation}
                onPress={() => { navigation.goBack() }}
                name={"Notification"}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default NotificationScreen;