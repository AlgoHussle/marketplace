import { View, Text, Image } from 'react-native'
import { useState} from 'react'
import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100))
  const [readMore, setReadMore] = useState(false)

  return (
    <>
      <View>
        <NFTTitle 
          title={data.title} 
          subTitle={data.creator}
          titleSize
          />
      </View>
    </>
  )
}

export default DetailsDesc