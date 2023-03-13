import { View, Text } from 'react-native'
import { useState} from 'react'
import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100))
  const [readMore, setReadMore] = useState(false)

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
          fontSize: SIZES.small,
          fontFamily: FONTS.regular,
          color: COLORS.secondary,
          lineHeight: SIZES.large
        }}>
          <Text>
            {text}
            {!readMore && '...'}
            <Text style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
              lineHeight: SIZES.large
            }}
            onPress={() => {
              setTe
            >
              {readMore ? ' Show Less' : ' Read More'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  )
}

export default DetailsDesc