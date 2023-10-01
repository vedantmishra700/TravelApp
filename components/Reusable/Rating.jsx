import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import reusable from './reusable.style'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import {WidthSpacer,ReusableText} from "../../components/index"




const Rating = ({rating}) => {
  return (
    <View style={reusable.rowWithSpace('flex-start')}>

        <MaterialCommunityIcons
        name='star'
        size={20}
        color={'#FD9942'}
        />

     <WidthSpacer  width={5}/>

     <ReusableText 
       text={rating} 
       color={'#FD9942'} 
       size={15} 
       family={'medium'}/>
    
    </View>
  )
}

export default Rating

const styles = StyleSheet.create({})