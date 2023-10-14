import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS,SIZES } from '../../constants/theme'
import AppBar from '../../components/Reusable/AppBar'
import { HeightSpacer, ReusableText,SettingTile } from '../../components'


const Settings = ({navigation}) => {
  return (
    <View style={{backgroundColor:COLORS.lightWhite,flex:1,}}>
      <View style={{height:120}}>
      <AppBar 
        top={50}
        left={20}
        right={20}
        color={COLORS.white}
        onPress={() => navigation.goBack()}
      />

      </View>

      <View style={{marginHorizontal:20}}> 
      <ReusableText 
        text={'Account Settings'}
        family='regular'
        size={SIZES.xLarge}
        color={COLORS.black}
        />
        <HeightSpacer height={15}/>
        <SettingTile  title={"Language"} onPress={()=> {}}/>
        

        <ReusableText 
        text={'Support'}
        family='regular'
        size={SIZES.xLarge }
        color={COLORS.black}
        />

        <HeightSpacer height={15}/>

        <ReusableText 
        text={'Legal'}
        family='regular'
        size={SIZES.xLarge}
        color={COLORS.black}
        />

        <HeightSpacer height={15}/>
      </View>
      
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})