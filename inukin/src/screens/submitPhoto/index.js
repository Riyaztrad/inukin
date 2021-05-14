import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity ,ScrollView} from 'react-native';
import CustomHeader from '../../components/CustomHeader'
import { FontAwesomes} from "../../constants/Icons";
import CONSTANT from '../../constants'
function SubmitPhotoScreen()    {

  console.log(app)
    return (
      <ScrollView >
          <CustomHeader 
          icon={CONSTANT.App.staticImages.back}
          name={'Submit a Photo'}
          />
          <View style={styles.textContainer}>
              <Text>Select a Photo</Text>
              <TouchableOpacity>
                  <Text>+Add</Text>
              </TouchableOpacity>
          </View>
          <Text>jjkkjk</Text>
      </ScrollView>
    );
  
}
const styles = StyleSheet.create({
    textContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
paddingLeft:30,
paddingRight:30,
backgroundColor:CONSTANT.App.colors.i_background,
    }
    
})

export default SubmitPhotoScreen;
