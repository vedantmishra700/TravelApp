import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Slides from '../../components/Onboard/Slides'

const Onboarding = () => {

    const slides =[
        {
            id:1,
            image:require('../../assets/images/1.png'),
            title:"Find the perfect place to stay"
        },
        {
            id:2,
            image:require('../../assets/images/2.png'),
            title:"Discover The World"
        },
        {
            id:3,
            image:require('../../assets/images/3.png'),
            title:"Find the best Hotels in the World"
        }
    ]


  return (
   <FlatList 
   data={slides}
   keyExtractor={(item) =>item.id.toString() }
   pagingEnabled
   horizontal
   showsHorizontalScrollIndicator={false}
   renderItem={({item}) => <Slides item={item} />}
   />
  )
}

export default Onboarding

const styles = StyleSheet.create({

})