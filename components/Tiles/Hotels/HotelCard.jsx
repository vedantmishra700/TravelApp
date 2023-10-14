import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants/theme'
import NetworkImage from '../../Reusable/NetworkImage'
import HeightSpacer from '../../Reusable/HeightSpacer'
import ReusableText from '../../Reusable/ReusableText'
import Rating from '../../Reusable/Rating'

const HotelCard = ({item,margin,onPress}) => {
  return (
    <TouchableOpacity style={styles.card(margin)} onPress={onPress}>
     <View>
        <View style={styles.imageContainer}>
         <NetworkImage 
         source={item.imageUrl}
         width={'90%'}
         height={'100%'}
         RadioButtonIOS={16}
         />
        </View>

        <View style={{paddingLeft:8,paddingTop:2,paddingRight:5}}>
        <ReusableText 
       text={item.title} 
       color={COLORS.black} 
       size={SIZES.medium} 
       family={'medium'}/>

     

      <ReusableText 
       text={item.location} 
       color={COLORS.gray} 
       size={SIZES.small} 
       family={'medium'}/>

     

     <Rating rating={item.rating}/>

        </View>
     </View>
    </TouchableOpacity>
  )
}

export default HotelCard

const styles = StyleSheet.create({
    card: (margin) => ({
     width: 165,
     height:200,
     borderRadius:16,
     backgroundColor:COLORS.lightWhite,
     marginRight:margin,
    }),
    imageContainer:{
      alignItems:"center",
      marginTop:6,
      height:110,
    }
})