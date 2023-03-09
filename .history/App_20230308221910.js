import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { view}

export default function App() {
  return (
    <View>
      <Text>Citiz3ns Marketplace</Text>
      <StatusBar style="auto" />
    </View>
  );
}


