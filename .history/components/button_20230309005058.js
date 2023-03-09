import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity, Image  } from 'react-native'
import { COLORS, assets, SIZES, FONTS, SHADOWS } from '../constants'



export const CircleButton = () => {
  return (
    <TouchableOpacity 
        style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.white,
            
        }}
    
    >

    </TouchableOpacity>
  )
}

export const Rectbutton = () => {
    return (
      <View>
        <Text>Circle</Text>
      </View>
    )
  }

