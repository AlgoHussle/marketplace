import { View, TextareaHTMLAttributes, SafeArea, StatusBar, FlatList } from 'react-native';
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import { CircleButton, Rectbutton, SubInfo, FocusedStatusBar,
  DetailsDesc, DetailsBid } from '../components';


const Details = ({ route, navigation}) => {
  const { data } = route.params;
  (``)
  console.log${data}
  console
  (``)

  return (
    <div>Details</div>
  )
}

export default Details