
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';


const Stack = createStackNavigator();

export App () {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen />
        <Stack.Screen />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}


