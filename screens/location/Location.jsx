import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MapView,{Marker} from "react-native-maps";
import HotelMap from '../../components/Hotel/HotelMap';

const Location = () => {
  const coordinates={
    title:"My Location",
    latitude:35.6855,
    longitude:139.68884,
    latitudeDelta:0.01,
    longitudeDelta:0.01,
  }
  return (
   
    <TouchableOpacity onPress={() => {}} style={styles.container}>
    <MapView style={styles.mapStyle} region={coordinates}>
     <Marker coordinate={coordinates} title={coordinates.title}/>
    </MapView>

</TouchableOpacity>
  )
    
}

export default Location

const styles = StyleSheet.create({
  mapStyle:{
    marginVertical:10,
    height: "100%",
    width:"100%",
    borderRadius:20  
  },
  container:{
    marginTop:30,
    marginBottom:120,
    marginHorizontal:10
  }
})