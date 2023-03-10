import { View, Text , Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS } from '../constants';


const NFTCard = ({ data }) => {
  const navigation = useNavigation();


const NFTCard = () => {
  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark,
    }}>
      <Text>NFTCard</Text>
    </View>
  )
}
}
export default NFTCard