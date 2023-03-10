
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import Details from './screens/Details';


const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  }
}

const App = () => {
  return (
    <NavigationContainer theme={theme} >
      <StackNavigator screenOptions={{headerShown: false }}
      initialRouteName="Home"
      >
        <Stack.Screen 
          name='Home'
          component={Home} 
        />
        <Stack.Screen 
          name='Details' 
          component={Details} />  
      </StackNavigator>
    </NavigationContainer>
  );
}

export default App;
