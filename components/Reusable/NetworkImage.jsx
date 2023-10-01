import { StyleSheet,Image } from 'react-native'
import React from 'react'

const NetworkImage = ({source,width,height,RadioButtonIOS }) => {
  return (
   <Image  source={{uri:source}} style={styles.image(width,height,RadioButtonIOS)}/>
  )
}

export default NetworkImage

const styles = StyleSheet.create({
    image: (width,height,RadioButtonIOS) => ({
        width:width,
        height:height,
        borderRadius:RadioButtonIOS,
        resizeMode:'cover',
    })
})