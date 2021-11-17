// In App.js in a new project
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CardScreen from './screens/CardScreen';
import DeckScreen from './screens/DeckScreen';
import AboutScreen from './screens/AboutScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Pokemons' component={HomeScreen} />
      <Tab.Screen name='Decks' component={DeckScreen} />
      <Tab.Screen name='About' component={AboutScreen} />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="CardScreen" component={CardScreen} />
      </Stack.Navigator>
    </NavigationContainer>   
  );
}

export default App;