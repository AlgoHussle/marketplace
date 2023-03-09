import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from '/screen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Citiz3ns Marketplace</Text>
      <StatusBar style="auto" />
    </View>
  );
}


