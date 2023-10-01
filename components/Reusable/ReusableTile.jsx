import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reusable from './reusable.style'
import {COLORS,SIZES} from "../../constants/theme"
import {NetworkImage,WidthSpacer,ReusableText, HeightSpacer} from "../../components/index"
import Rating from './Rating'


const ReusableTile = ({item ,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={reusable.rowWithSpace('flex-start')}>
         <NetworkImage  
         source={item.imageUrl}
         width={80} 
         height={80} 
         RadioButtonIOS={12} />

         <WidthSpacer  width={15}/>

         <View>

       <ReusableText 
       text={item.title} 
       color={COLORS.black} 
       size={SIZES.medium} 
       family={'medium'}/>

       <HeightSpacer  height={8}/>

       <ReusableText 
       text={item.location} 
       color={COLORS.gray} 
       size={14} 
       family={'medium'}/>

       <HeightSpacer  height={8}/>

       <View style={reusable.rowWithSpace('flex-start')}>

       <Rating  rating={item.rating}/>
       <WidthSpacer  width={5}/>
       <ReusableText 
       text={"("+item.review+")"} 
       color={COLORS.gray} 
       size={14} 
       family={'medium'}/>
       </View>


         </View>
        </View>
    </TouchableOpacity>
  )
}

export default ReusableTile

const styles = StyleSheet.create({
  container:{
   padding:10,
   backgroundColor:COLORS.lightWhite,
   borderRadius:12,
  }
})