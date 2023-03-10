import { View, TextareaHTMLAttributes, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import { CircleButton, Rectbutton, SubInfo, FocusedStatusBar,
  DetailsDesc, DetailsBid } from '../components';


const Details = ({ route, navigation}) => {
  const { data } = route.params;

  return (
    <SafeAreaView>
      <FocusedStatusBar
      barStyle="dark-content"
      backgroundColor={transparent}
      translucent={true}
      />
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <Rectbutton 
        minWidth={170}
        fon
        />
      </View>
    </SafeAreaView>
  )
}

export default Details