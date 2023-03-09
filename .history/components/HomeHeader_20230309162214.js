import { View, Text, Image, TextInput } from 'react-native';
import { COLORS, FONTS, SIZES, assets } from '../constants';

const HomeHeader = () => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    }}>
      <View 
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }} 
        >
          <Image />
        </View>
    </View>
  )
}

export default HomeHeader