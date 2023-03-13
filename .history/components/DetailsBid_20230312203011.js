import { View, Text, Image } from 'react-native';
import { EthPrice } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsBid = ({ bid }) => {
  return (
    <View>
      <Image 
      source={bid.image}
      resizeMode="contain"
      style={{ width: 48, height: 48 }}
      />

      <View style={{ marginLeft: SIZES.base }}>
        <Text style={{ ...FONTS.h3 }}>{bid.name}</Text>
        <Text style={{ ...FONTS.body4 }}>{bid.address}</Text>
        <EthPrice price={bid.price} />

        
    </View>
  )
}

export default DetailsBid