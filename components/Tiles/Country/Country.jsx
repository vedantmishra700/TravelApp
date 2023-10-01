import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TEXT,COLORS } from '../../../constants/theme';
import {HeightSpacer,NetworkImage,ReusableText} from '../../../components/index';
import { useNavigation } from '@react-navigation/native';

const Country = ({item}) => {
    const navigation =useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CountryDetails',{item})}>
        <View>
        <NetworkImage source={item.imageUrl} width={85} height={85} RadioButtonIOS={12} />
        <HeightSpacer height={5}/>
        <ReusableText 
       text={item.country} 
       color={COLORS.black} 
       size={TEXT.large} 
       family={'medium'}
       align={"center"}/>
        </View>
    </TouchableOpacity>
  )
}

export default Country