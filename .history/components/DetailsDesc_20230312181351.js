import { View, Text } from 'react-native'
import { useState} from 'react'
import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsDesc = () => {
  return (
    <>
      <View>
        <NFTTitle 
        title={data.name}
        subTitle={data.creator}
        />
      </View>
    </>
  )
}

export default DetailsDesc