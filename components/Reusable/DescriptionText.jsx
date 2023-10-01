import { StyleSheet, Text} from 'react-native'
import React from 'react'
import { TEXT } from '../../constants/theme'

const DescriptionText = ({lines,text}) => {
  return (
   
      <Text numberOfLines={lines} style={styles.description}>
       {text}
        </Text>
    
  )
}

export default DescriptionText

const styles = StyleSheet.create({
    description:{
        paddingTop:10,
        fontFamily:"regular",
        fontSize:TEXT.medium,
        textAlign:"justify",

    }
})