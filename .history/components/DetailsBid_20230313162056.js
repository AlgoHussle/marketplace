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
      
      <View>
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.small,
          color: COLORS.primary
        }}>
          Bid placed by {bid.name}
        </Text>
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.small - ,
          color: COLORS.primary
        }}>
          {bid.date}
        </Text>
      </View>
    </View>
  )
}

export default DetailsBid