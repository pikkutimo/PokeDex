import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

function HomeScreen({ navigation }) {
  const [cards, setCards] = React.useState([]);
  const [selectedId, setSelectedId] = React.useState(null);

  React.useEffect(() => {
    const getInitalCards = async () => {
      try {
        const { data } = await axios
        .get('https://curly-rabbit-53.loca.lt/data')

        setCards(data)
        console.log('Cards fetched')
      } catch (error) {
        console.log(error);
      }
    }
    
    getInitalCards();
      // USE WHEN ACCESSING ACTUAL API
      // .get('https://api.pokemontcg.io/v2/cards', {
      //   headers: {
      //     'X-Api-Key': '45a5c559-fd20-46c2-93ab-2df8ba76466c'
      //   }
      // })
      // setCards(data.data)
   
  }, []);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={item => item.id} />
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