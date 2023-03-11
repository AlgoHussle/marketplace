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
          flex: 1, 
          backgroundColor: COLORS.white 
          
          }}>
        <Rectbutton 
        minWidth={170}
        fontSize={SIZES.large}
        {...SHADOWS.shadow}
        />
      </View>
    </SafeAreaView>
  )
}

export default Details