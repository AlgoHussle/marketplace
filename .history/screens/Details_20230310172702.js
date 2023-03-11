import { View, Text, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import { CircleButton, Rectbutton, SubInfo, FocusedStatusBar,
  DetailsDesc, DetailsBid } from '../components';


const Details = ({ route, navigation}) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1}}>
      <FocusedStatusBar
      barStyle="dark-content"
      backgroundColor='transparent'
      translucent={true}
      />
      <View style={{
          width: "100%",
          position: 'absolute',
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          zIndex: 1
          }}>
        <Rectbutton 
        minWidth={170}
        fontSize={SIZES.large}
        {...SHADOWS.shadow}
        />
      </View>

      <FlatList
      data={data}
      renderItem={({ item }) => <DetailsBid data={item} 
      
      />}
      />
    </SafeAreaView>
  )
}

export default Details