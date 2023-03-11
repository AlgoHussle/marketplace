import { View, Text, SafeAreaView, StatusBar, FlatList } from 'react-native';
import React from 'react';
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import { CircleButton, Rectbutton, SubInfo, FocusedStatusBar,
  DetailsDesc, DetailsBid } from '../components';


  const DetailsHeader = ({ data, navigation }) => (
    <View style={{ width: '100%', height: 373 }}>
      <Image 
      source={data.image} 
      resizeMode="cover" 
      style={{ width: '100%', height: 373 }} 
      />
      
      <CircleButton 
        imgUrl={assets.left}
        
        />
    </View>
  )

const Details = ({ route, navigation }) => {
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
      data={[data]}
      renderItem={({ item }) => <DetailsBid data={item} 
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
      ListHeaderComponent={(
        <React.Fragment>
          <DetailsHeader data={data} navigation=  />
        </React.Fragment>
      )}
      />}
      />
    </SafeAreaView>
  )
}

export default Details