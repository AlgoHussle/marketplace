import { View, Text } from 'react-native'
import { useState} from 'react'
import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsDesc = ({ data }) => {
  return (
    <>
      <View style={{
        width
      }}>
        <NFTTitle 
        title={data.name}
        subTitle={data.creator}
        titleSize={SIZES.extraLarge}
        subTitleSize={SIZES.font}
        z
        />
        <EthPrice price={data.price} />
      </View>
    </>
  )
}

export default DetailsDesc