import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Image, SafeAreaView, FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import uploadToAnonymousFilesAsync from 'anonymous-files';
import * as SplashScreen from 'expo-splash-screen';
import axios from 'axios';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
  </View>
);

export default function App() {
  // const [selectedImage, setSelectedImage] = React.useState(null);
  const [cards, setCards] = React.useState([]);  

  React.useEffect(() => {
    axios
      .get('https://dangerous-treefrog-84.loca.lt/data')
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