import { View, Text, Image } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>

      <Image 
      source={{uri:Image.LOGO,}}
      style={{width: 200, height:200}}/>

      <Text>HomeScreen :</Text>
    </View>

  )
}

export default HomeScreen;