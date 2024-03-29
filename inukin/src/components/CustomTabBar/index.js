import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, StyleSheet} from 'react-native';

import CONSTANT from '../../constants';

const CustomTabBar = ({state, descriptors, navigation}) => {

    return (
        <View style={styles.tab} >
            {
                state.routes.map((route, index) => {
                    const {options} = descriptors[route.key];

                    {/* const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;
                        const icon = options. */}

                    let Icon = CONSTANT.App.staticImages.home;

                    if (route.name === "home") {
                        Icon = CONSTANT.App.staticImages.home;
                    } else if (route.name === "Scores") {
                        Icon = CONSTANT.App.staticImages.trophy;
                    } else if (route.name === "Edits") {
                        Icon = CONSTANT.App.staticImages.plus;
                    } else if (route.name === "Bells") {
                        Icon = CONSTANT.App.staticImages.bell;
                    } else if (route.name === "Profiles") {
                        Icon = CONSTANT.App.staticImages.user;
                    }

                    const isFocused = state.index === index;

                    const onPress = () => {

                        console.log("route.name", route.name)
                        if (route.name === "home") {
                            return navigation.navigate(route.name);
                        } else if (route.name === "Scores") {
                            navigation.navigate(CONSTANT.App.screenNames.score);
                        } else if (route.name === "Edits") {
                            navigation.navigate(CONSTANT.App.screenNames.edit);
                        } else if (route.name === "Bells") {
                            navigation.navigate(CONSTANT.App.screenNames.notification);
                        } else if (route.name === "Profiles") {

                            navigation.navigate(CONSTANT.App.screenNames.profile);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity

                            key={options.tabBarTestID}
                            accessibilityStates={isFocused ? ['selected'] : []}
                            accessibilityLabel={options.tabBarAccessibilityLabel}

                            onPress={() => {onPress()}}
                            style={{justifyContent: 'space-around', alignItems: "center", width: 50, height: 50, }}
                        >
                            {
                                route.name === "Profiles" ?
                                    <Image source={Icon}
                                        style={{height: '70%', width: '70%'}}
                                    /> :
                                    <Image source={Icon}
                                        style={{height: '50%', width: '50%'}}
                                    />
                            }


                        </TouchableOpacity>
                    );
                })
            }
        </View >
    );
};

const styles = StyleSheet.create({
    tab: {
        borderTopWidth: 0.5,
        borderTopColor: 'rgba(0,0,0,0.5)',
        flexDirection: 'row',
        backgroundColor: CONSTANT.App.colors.i_background,
        justifyContent: "space-around",
        alignItems: "center"
    }
});

export default CustomTabBar;