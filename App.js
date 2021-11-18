import * as React from 'react';
import { Provider as StateProvider } from 'react-redux';
import store from './redux/store';
import MainStackNavigator from './navigation/AppNavigator';


export default function App() {
  return (
    <StateProvider store={store}>
       <MainStackNavigator />
    </StateProvider>
  )
}