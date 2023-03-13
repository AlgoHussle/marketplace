import { View, Text, Image } from 'react-native';
import { EthPrice } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsBid = ({ bid }) => {
  return (
    <View>
      <Image 
      source={bid.Image}
      resizeMode="contain"
      style={{ width: 48, height: 48 }}
      />
      
      <View>
        <Text style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.small,
          color: COLORS.white
        }}>
          Bid placed by {bid.name}
        </Text>
        <Text style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.small,
          color: COLORS.white
        }}>
          Bid placed by {bid.name}
        </Text>
      </View>
    </View>
  )
}

export default DetailsBid