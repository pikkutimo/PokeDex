import * as React from 'react';
import { SimpleLineIcons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CardScreen from '../screens/CardScreen';
import DeckScreen from '../screens/DeckScreen';
import AboutScreen from '../screens/AboutScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name='Pokemons'
      component={HomeScreen} 
      options= {{
        tabBarIcon: ({ color, size }) => (
          <SimpleLineIcons name="home" size={24} color='#3b4cca' />
        ),
      }}
      />
      <Tab.Screen 
      name='Deck' 
      component={DeckScreen}
      options= {{
        tabBarIcon: ({ color, size }) => (
          <SimpleLineIcons name="wallet" size={24} color='#3b4cca' />
        ),
      }}
      />
      <Tab.Screen
      name='About'
      component={AboutScreen}
      options= {{
        tabBarIcon: ({ color, size }) => (
          <SimpleLineIcons name="info" size={24} color='#3b4cca' />
          ),
      }}
      />
    </Tab.Navigator>
  )
}

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="CardScreen" component={CardScreen} />
      </Stack.Navigator>
    </NavigationContainer>   
  );
}

export default MainStackNavigator