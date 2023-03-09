import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Citiz3ns Marketplace</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
