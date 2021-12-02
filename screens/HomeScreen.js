import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import { loadCollection } from '../redux/collectionSlice';
import SingleCard  from '../components/SingleCard';
import { SafeAreaView, FlatList, StyleSheet, Text } from 'react-native';
import { addCard } from '../redux/deckSlice'
import axios from 'axios';


const HomeScreen = ({ navigation }) => {

  const cards = useSelector(state => state.collection.cardList);
  const deck = useSelector(state => state.deck.deckList);
  const [selectedId, setSelectedId] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const dispatch = useDispatch();
  let rowRefs = new Map();

  React.useEffect(() => {
    const getInitalCards = async () => {
      try {
        const { data } = await axios
        .get('https://api.pokemontcg.io/v2/cards?page=1&pageSize=250')
        // https://api.pokemontcg.io/v2/cards?page=1&pageSize=250
        console.log('Cards fetched')
        dispatch(loadCollection(data.data))
        setLoaded(true)
      } catch (error) {
        console.log(error);
      }
    }
    
    getInitalCards();
   
  }, []);

  const incrementCard = (item) => {
    dispatch(addCard(item));
  }

  return (
    <SafeAreaView style={styles.container}>
      {loaded 
        ? <FlatList
        data={cards}
        keyExtractor={item => item.id}
        extraData={selectedId}
        renderItem={({ item }) => 
          <SingleCard
            item={item}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            swipeLeftFunction={incrementCard}
            rowRefs={rowRefs}
            navigation={navigation}
            />
        }
        />
        : <Text>Loading...</Text>
      }
      
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