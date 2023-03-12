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
        marginVertical: SIZES.extraLarge * 1.5
      }}>
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}>
          Description
        </Text>
        <View style={{ 
          font
        }}>

        </View>
      </View>
    </>
  )
}

export default DetailsDesc