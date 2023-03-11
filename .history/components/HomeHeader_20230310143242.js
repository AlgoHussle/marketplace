import { View, Text, Image, TextInput } from 'react-native';
import { COLORS, FONTS, SIZES, assets } from '../constants';

const HomeHeader = ({ onSearch }) => {
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
          <Image 
            source={assets.logo}
            resizeMode="contain"
            style={{ width: 90, height: 25 }}
          />

          <View style={{ width: 45, height: 45}}>
            <Image
              source={assets.person01}
              resizeMode="contain"
              style={{ width: '100%', height: '100%' }}
            />
            <Image
              source={assets.badge}
              resizeMode="contain"
              style={{ position: 'absolute', width: 15, height: 15, bottom: 0, right: 0 }}
            />

            </View>
        </View>
        <View style={{ marginVertical: SIZES.font}}>
          <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, 
          color: COLORS.white}}>
            Hello, <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.small,
            color: COLORS.white}}>
              John 👋
              </Text>
          </Text>  
          <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large,
            color: COLORS.white}}>
              Lets find a <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large,
            color: COLORS.white, marginTop: SIZES.base / 2 }}>
              Masterpiece
              </Text>
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center',
        paddingHorizontal: SIZES.base, paddingVertical: SIZES.base / 2,
        borderRadius: SIZES.base, backgroundColor: COLORS.white }}> 
        <View style={{
          width: '100%',
          borderRadius: SIZES.font,
          backgroundColor: COLORS.lightGray,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small -2,
        }}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, margin. }}
          />
          <TextInput
            style={{ flex: 1 }}
            placeholder="Search Collections"
            placeholderTextColor={COLORS.gray}
            onChangeText={onSearch}
          />
          </View>
          </View>
    </View>
  )
}

export default HomeHeader