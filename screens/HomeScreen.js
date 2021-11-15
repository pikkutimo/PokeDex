import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet, Text, TouchableOpacity, Modal, Alert } from 'react-native';
import axios from 'axios';


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

// const setAndShow = ({item, setSelectedId, setModalVisible}) => {
//   setModalVisible(true)
//   setSelectedId(item.id)
// };

function HomeScreen({ navigation }) {
  const [cards, setCards] = React.useState([]);
  const [selectedId, setSelectedId] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

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
        onPress={() => {
          setSelectedId(item.id);
          setModalVisible(true)
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <Text style={styles.modalView}>Helurei</Text>
      </Modal>
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
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    title: {
      fontSize: 32,
    },
  });

export default HomeScreen;