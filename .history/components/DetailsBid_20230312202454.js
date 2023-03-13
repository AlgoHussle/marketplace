import { View, Text, Image } from 'react-native'
import React from 'react'
import { EthPrice } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsBid = ({ bid }) => {
  return (
    <View>
      <Image 
      source={bid.image}
      resizeMode="cover"
      >

      </Image>
    </View>
  )
}

export default DetailsBid