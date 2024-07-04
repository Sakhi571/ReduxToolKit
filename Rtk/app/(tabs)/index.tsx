import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home';
import Second from './src/screens/Second';
import { Provider } from 'react-redux';
import Store from './src/store/Store';
const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Provider store={Store}>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Second" component={Second}/>
  </Stack.Navigator>
  </Provider>
  );
}

