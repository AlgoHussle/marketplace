import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SHADOWS, SIZES, assets } from '../constants';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={{ 
      width: SIZES.width * 0.9,
      height: SIZES.height * 0.3,
      backgroundColor: COLORS.white,
      borderRadius: SIZES.radius,
      marginVertical: SIZES.base,
      ...SHADOWS.default
    }}>
      <View style={{ flex: 1 }}>
        <Image
          source={assets[data.image]}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: SIZES.radius
          }}
        />
      </View>

      <View style={{ 
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: SIZES.base,
        borderTopLeftRadius: SIZES.radius,
        borderTopRightRadius: SIZES.radius,
        backgroundColor: COLORS.white
      }}>
        <Text style={{ ...FONTS.h3 }}>{data.name}</Text>
        <Text style={{ ...FONTS.body4 }}>{data.artist}</Text>
      </View>
    </View>
  )
}
