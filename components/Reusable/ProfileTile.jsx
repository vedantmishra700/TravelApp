import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import reusable from './reusable.style';
import {AntDesign} from "@expo/vector-icons";
import WidthSpacer from './WidthSpacer';
import ReusableText from './ReusableText';
import { COLORS, SIZES } from '../../constants/theme';

const ProfileTile = ({onPress,title,icon}) => {
  return (
   <TouchableOpacity onPress={onPress} style={styles.tile}>
    <View style={reusable.rowWithSpace('space-between')}>
        <View style={reusable.rowWithSpace('flex-start')}> 
        <AntDesign  name={icon} size={20}/>

        <WidthSpacer  width={20}/>

        <ReusableText 
        text={title}
        family='medium'
        size={SIZES.medium}
        color={COLORS.gray}
        />


        </View>
        <AntDesign  name={'right'} size={16}/>

    </View>

   </TouchableOpacity>


  )
}

export default ProfileTile

const styles = StyleSheet.create({
    tile:{
        backgroundColor:COLORS.white,
        height:50,
        width:"100%",
        marginBottom:20,
        padding:10,
        justifyContent:"center",
        borderRadius:20

    }
})