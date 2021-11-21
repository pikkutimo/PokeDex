import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import { loadCollection } from '../redux/collectionSlice';
import SingleCard  from '../components/SingleCard';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { useFonts, Inter_300Light } from '@expo-google-fonts/inter';
import axios from 'axios';


function HomeScreen({ navigation }) {
  // const [cards, setCards] = React.useState([]);
  const cards = useSelector(state => state.collection.cardList);
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = React.useState(null);

  React.useEffect(() => {
    const getInitalCards = async () => {
      try {
        const { data } = await axios
        .get('https://hot-fly-13.loca.lt/data')

        dispatch(loadCollection(data))
        console.log('Cards fetched')
      } catch (error) {
        console.log(error);
      }
    }
    
    getInitalCards();
   
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
          <SingleCard item={item} selectedId={selectedId} setSelectedId={setSelectedId} />
        } />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: '#ffffff',
    },
  });

export default HomeScreen;