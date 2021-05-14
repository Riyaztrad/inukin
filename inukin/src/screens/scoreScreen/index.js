import React from 'react';
import { View, StyleSheet, ScrollView, Text,TouchableOpacity } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CONSTANT from '../../constants';
import Snackbar from 'react-native-snackbar';

const ScoreScreen = ({ navigation }) => {

    // const showSnackbar = () => {
    //     Snackbar.show({
    //       text: 'Hello world',
    //       //You can also give duration- Snackbar.LENGTH_SHORT, Snackbar.LENGTH_LONG
    //       duration: Snackbar.LENGTH_INDEFINITE,
    //       //color of snakbar
    //       backgroundColor: 'black',
    //       //color of text
    //       textColor: 'white',
    //       //action
    //       action: {
    //         text: 'UNDO',
    //         textColor: 'green',
    //         onPress: () => {
    //           console.log('clicked');
    //         },
    //       },
    //     });
    //   };
    
        
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: CONSTANT.App.colors.i_background }}>
            <CustomHeader
                icon={CONSTANT.App.staticImages.back}
                navigation={navigation}
                onPress={() => { navigation.goBack() }}
                name={"Score"}
            />
            <View>
            {/* <TouchableOpacity onPress={() => showSnackbar()}>
        <Text>Touch Here To Make Snackbar Appear</Text>
      </TouchableOpacity> */}
      

            </View>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ScoreScreen;