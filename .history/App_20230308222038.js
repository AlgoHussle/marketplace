import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen />
        <Stack.Screen />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


