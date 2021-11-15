// In App.js in a new project
import * as React from 'react';
import { Button, View, Text, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import HomeScreen from './screens/HomeScreen';

// const Item = ({ name }) => (
//   <View>
//     <Text>{name}</Text>
//   </View>
// );

// function HomeScreen({ navigation }) {
//   const [cards, setCards] = React.useState([]); 

//   React.useEffect(() => {
//     axios
//       .get('https://neat-snail-3.loca.lt/data')
//       .then(response => {
//         // handle success
//         setCards(response.data)
//         console.log('Cards fetched!')
//       })
//       .catch(error => {
//         // handle error
//         console.log('Error fetching cards!')
//       });
//   }, []);

//   const renderItem = ({ item }) => <Item name={item.name} />;

//   return (
//     <SafeAreaView>
//       <FlatList data={cards} renderItem={renderItem} keyExtractor={item => item.id} />
//     </SafeAreaView>
//   );
// }

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;