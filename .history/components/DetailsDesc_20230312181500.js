import { View, Text } from 'react-native'
import { useState} from 'react'
import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsDesc = ({ data }) => {
  return (
    <>
      <View>
        <NFTTitle 
        title={data.name}
        subTitle={data.creator}
        tit
        />
      </View>
    </>
  )
}

export default DetailsDesc