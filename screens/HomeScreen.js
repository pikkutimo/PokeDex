import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';


// const Item = ({ name }) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{name}</Text>
//     </View>
//   );
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

function HomeScreen({ navigation }) {
  const [cards, setCards] = React.useState([]);
  const [selectedId, setSelectedId] = React.useState(null); 

  React.useEffect(() => {
    axios
      .get('https://quiet-ladybug-16.loca.lt/data')
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

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

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