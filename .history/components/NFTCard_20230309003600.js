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
      <View style={{ width: "100%", height: }}>


      </View>
      <Text>NFTCard</Text>
      </View>
  )
}

export default NFTCard
