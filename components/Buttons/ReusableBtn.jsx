import { StyleSheet, TouchableOpacity,Text} from 'react-native'
import React from 'react'
import { SIZES } from '../../constants/theme'

const ReusableBtn = ({btnText,onPress,textColor,width,backgroundColor,borderWidth,borderColor}) => {
  return (
   <TouchableOpacity onPress={onPress} style={styles.btnStyle(width,backgroundColor,borderWidth,borderColor)}>
   <Text style={styles.btnText(textColor)}>{btnText}</Text>
   </TouchableOpacity>
  )
}

export default ReusableBtn

const styles = StyleSheet.create({
    btnText: (textColor) => ({
      fontFamily:"medium",
      fontSize:SIZES.medium,
      color:textColor
    }),
    btnStyle: (width,backgroundColor,borderWidth,borderColor) =>({
       width:width,
       height:45,
       backgroundColor:backgroundColor,
       borderWidth:borderWidth,
       borderColor:borderColor,
       alignItems:"center",
       justifyContent:"center",
       borderRadius:SIZES.small
    })
})