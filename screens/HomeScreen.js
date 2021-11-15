import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';


const Item = ({ name }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );

function HomeScreen({ navigation }) {
    const [cards, setCards] = React.useState([]);  

  React.useEffect(() => {
    axios
      .get('https://neat-snail-3.loca.lt/data')
      .then(response => {
        // handle success
        setCards(response.data)
        console.log('Cards fetched!')
      })
      .catch(error => {
        // handle error
        console.log('Error fetching cards!')
      });
  }, []);

  const renderItem = ({ item }) => <Item name={item.name} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={cards} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default HomeScreen;