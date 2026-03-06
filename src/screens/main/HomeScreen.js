import { View, Text, Image } from 'react-native';
import React from 'react';
import imageUtils from '../../utils/image';

const HomeScreen = () => {
  return (
    <View>
      <Image
        source={{ uri: imageUtils.LOGO }}
        style={{ width: 200, height: 200 }}
      />
      <Text>HomeScreen :</Text>
    </View>
  );
};

export default HomeScreen;