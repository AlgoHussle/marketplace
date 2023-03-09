import { StatusBar } from 'react-native';
import React from 'react';
import { useIsFocused } from '@react-navigation/core';

const FocusedStatusBar = () => {
    const isFocused = useIsFocused();


  return isFocused ? <StatusBar animated={true} {} /> 
}

export default FocusedStatusBar