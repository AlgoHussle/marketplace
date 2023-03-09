import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';


import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
          data={NFTData}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader />}
          />
        </View>

        <View style={{ 
                zIndex: 1, 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0 ,
                zIndex: -1
                }}>
                  <
                  </View>
      </View>
    </SafeAreaView>
  )
}

export default Home