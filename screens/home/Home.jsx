import {  TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import { HeightSpacer, ReusableText} from '../../components'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import {AntDesign} from '@expo/vector-icons';
import styles from './home.style'
import Places from "../../components/Home/Places"
import Recommendations from "../../components/Home/Recommendations"
import BestHotels from '../../components/Home/BestHotels'

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={reusable.container}>
   <View>
    <View style={reusable.rowWithSpace('space-between')}>
    <ReusableText 
       text={"Hey User"} 
       color={COLORS.black} 
       size={TEXT.large} 
       family={'regular'}/>

     <TouchableOpacity 
     style={styles.box}
     onPress={()=> navigation.navigate('Search')}
     >
      <AntDesign 
      name='search1'
      size={26}
      />
     </TouchableOpacity>
    </View>
   <HeightSpacer height={SIZES.large}/>
    <ReusableText 
       text={"Places"} 
       color={COLORS.black} 
       size={TEXT.large} 
       family={'medium'}/>

       <Places />

       <Recommendations />

       <HeightSpacer  height={25}/>

       <BestHotels />
   </View>

    </SafeAreaView>
      
    
  )
}

export default Home
