import { View, Text } from 'react-native'
import { useState} from 'react'
import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsDesc = ({ data }) => {
  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

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

      <View style={{
        marginVertical: SIZES.extraLarge * 
      }}>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.font,
          color: COLORS.gray,
        }}>
          {data.description}
        </Text>
      </View>
    </>
  )
}

export default DetailsDesc