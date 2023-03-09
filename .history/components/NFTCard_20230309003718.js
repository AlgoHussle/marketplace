import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SHADOWS, SIZES, assets } from '../constants';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      ...SHADOWS.dark
    }}>
      <View style={{ width: "100%", height: 250}}>
        <Image 
        source={data.image} />
      </View>
      <Text>NFTCard</Text>
      </View>
  )
}

export default NFTCard
