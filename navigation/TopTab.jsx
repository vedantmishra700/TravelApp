import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {TopBookings,TopInfo,TopTrips} from "../screens";
import { HeightSpacer, NetworkImage } from '../components';
import { COLORS, SIZES } from '../constants/theme'; 
import AppBar from '../components/Reusable/AppBar';
import styles from './topTab.styles';
import ReusableText from "../components/Reusable/ReusableText";

const Tab=createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <View style={{flex:1}}>
        <View style={{backgroundColor:COLORS.lightWhite}}>
            <View>
                <NetworkImage  
                source={'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-08_1-ksh6mza3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f584d8501c27c5f649bc2cfce50705c0'}
                width={'100%'}
                height={270}
                RadioButtonIOS={0}
                /> 

                <AppBar 
                top={40}
                left={20}
                right={20}
                color={COLORS.white}
                icon={'logout'}
                color1={COLORS.white}
                onPress1={() => {}}
                />

                <View style={styles.profile}>
                  <Image
                   source={{uri:"https://i.pinimg.com/736x/78/96/9e/78969efd3ca5c81769d31337b140005d.jpg"}}
                   style={styles.image}
                   />

                   <HeightSpacer height={5} />

                   <View style={styles.name}>
                    <View style={{alignItems:"center"}}>
                   <ReusableText 
                     text={"Virat Kohli"} 
                     color={COLORS.black} 
                      size={SIZES.medium} 
                      family={'medium'}/>
                      </View>
                   </View>

                   <HeightSpacer height={5} />

                  <View style={styles.name}>
                  <View style={{alignItems:"center"}}>
                  <ReusableText 
                    text={"iamvkohli100@gmail.com"} 
                    color={COLORS.blue} 
                    size={SIZES.medium} 
                    family={'medium'}/>
                  </View>
                  </View>

                </View>
            </View>
        </View>
      <Tab.Navigator>
        <Tab.Screen  name='Bookings' component={TopBookings}/>
        <Tab.Screen  name='Info' component={TopInfo}/>
        <Tab.Screen  name='Trips' component={TopTrips}/>
      </Tab.Navigator>
    </View>
  )
}

export default TopTab

