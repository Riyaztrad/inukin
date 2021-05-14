import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import CustomHeader from '../../components/CustomHeader';
import CONSTANT from '../../constants/index';
import {ListComponent} from '../../components/ListComp'
import { ScrollView } from 'react-native-gesture-handler';

function VoteFhotoScreen(props){

    const data=[
        {
            id:1,
            image:require('../../assets/icons/group1.png')
        },
        {
            id:2,
            image:require('../../assets/icons/group4.png')
        },
        {
            id:3,
            image:require('../../assets/icons/group1.png')
        },
        {
            id:4,
            image:require('../../assets/icons/group4.png')
        }



    ]

    const secondData=[
        {
            id:1,
            image:require('../../assets/icons/group3.png')
        },
        {
            id:2,
            image:require('../../assets/icons/group2.png')
        },
        {
            id:3,
            image:require('../../assets/icons/group3.png')
        },
        {
            id:4,
            image:require('../../assets/icons/group2.png')
        }

    ]

    return(
        <ScrollView style={styles.container}>
            <View style={{flex:1}}>

            <CustomHeader
                home
                icon={require('../../assets/icons/menu.png')}
                // navigation={navigation}
                onPress={() => { console.log("hiiii")}}
                name={"Search for contest"}
            />


            </View>
            <View style={styles.designContainer}>
                <Text style={styles.text}>Vote The Best Photo</Text>
                {/* <ProfileList /> */}
                <ListComponent 
                data={data}
                />

                            <View style={styles.footer}>
            <ListComponent 
                data={secondData}
                />

            </View>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',


    },
    designContainer:{
        flex:5,
        marginTop:10,
        // paddingLeft:12,
        // paddingRight:10,
             backgroundColor: CONSTANT.App.colors.i_background,


    },
    text:{
        color: CONSTANT.App.colors.i_solidblue,
        fontFamily: CONSTANT.App.fonts.DMSANSBOLD,
        fontSize: 14,
        padding:10


    },
    footer:{
        marginTop:10,
        backgroundColor: CONSTANT.App.colors.i_background,


    }
})
export default VoteFhotoScreen;