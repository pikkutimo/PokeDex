import * as React from 'react';
import { Provider as StateProvider } from 'react-redux';
import store from './redux/store';
import MainStackNavigator from './navigation/AppNavigator';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <StateProvider store={store}>
         <MainStackNavigator />
      </StateProvider>
    )
  }
  
}