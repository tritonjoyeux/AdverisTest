import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Views/Home/Home';
import Result from './src/Views/Result/Result';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen 
          name="Result"
          component={Result}
          options={({route}: {route:{params?:{title?:string}}}) => ({title: route.params ? route.params?.title : 'Résultats'})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}