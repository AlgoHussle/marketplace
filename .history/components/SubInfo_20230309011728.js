import { View, Text, Image } from 'react-native'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'


export const NFTTitle = () => {
    return (
        <View>
            <Text>NFTTitle</Text>
        </View>
    )
}
export const EthPrice = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  )
}
export const Imagecmp = ({ imgUrl, index}) => {
  return (
    <Image 
    source={imgUrl}
    resizeMode="contain"
    style={{ width: 48, height: 48 ,
    marginLeft: index > 0 ? -SIZES.base : 0
    }}
    />
  )
}
export const People = () => {
    return (
        <View style={{ flexDirection: 'row'}}>
        {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
            <Imagecmp key={index} imgUrl={imgUrl} index={index} />
        ))}
        </View>
    )
}
export const EndDate = () => {
    return (
        <View
        style={{ 
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.base,
            backgroundColor: COLORS.white,
            justifyContent: 'center',
            alignItems: 'center',
            ...SHADOWS.light,
            elevation: 1,
            maxWidth: '50%'
        }}
        >
        <Text style={{ fontFamily: FONTS.regular, font}}>SubInfo</Text>
        </View>
    )
}
export const SubInfo = () => {
    return (
        <View style={{
            width: "100%",
            paddingHorizontal: SIZES.font,
            marginTop: SIZES.extraLarge,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <People />
            <EndDate />
        </View>
    )
}

