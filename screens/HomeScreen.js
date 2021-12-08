import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import { loadCollection } from '../redux/collectionSlice';
import SingleCard  from '../components/SingleCard';
import { SafeAreaView, FlatList, StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { addCard } from '../redux/deckSlice'
import axios from 'axios';


const HomeScreen = ({ navigation }) => {

  const cards = useSelector(state => state.collection.cardList);
  const deck = useSelector(state => state.deck.deckList);
  const [selectedId, setSelectedId] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();
  let rowRefs = new Map();

  React.useEffect(() => getData(), []);

  const getData = async () => {
    setLoading(true)
    try {
      const { data } = await axios
      .get(`https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=250`)
      console.log('Cards fetched')
      dispatch(loadCollection(data.data))
      setPage(page + 1)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }


  const incrementCard = (item) => {
    dispatch(addCard(item));
  }

  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getData}
          //On Click of button load more data
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {loading ? (
            <ActivityIndicator
              color="white"
              style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
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
          ListFooterComponent={renderFooter}
        />    
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: '#ffffff',
    },
    footer: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    loadMoreBtn: {
      padding: 10,
      backgroundColor: '#ff0000',
      borderRadius: 4,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnText: {
      color: '#ffde00',
      fontSize: 15,
      textAlign: 'center',
    },
  });

export default HomeScreen;