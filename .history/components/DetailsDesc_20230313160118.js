import { View, Text, Image } from 'react-native'
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
          title={data.title} 
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
          />

        <EthPrice price={data.price} />
      </View>

      <View
        style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary,
        }}>description</Text>
        <View style={{}}>

        </View>
      </View>
    </>
  )
}

export default DetailsDesc