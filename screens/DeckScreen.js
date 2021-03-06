import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import DeckCard from '../components/DeckCard';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { addCard, removeCard} from '../redux/deckSlice'

const DeckScreen = ({ navigation }) => {

  const deck = useSelector(state => state.deck.deckList);
  const [selectedDeckId, setSelectedDeckId] = React.useState(null);
  const dispatch = useDispatch();
  let rowRefs = new Map();

  const decrementCard = (item) => {
    dispatch(removeCard(item));
  }

  const incrementCard = (item) => {
    dispatch(addCard(item));
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={deck}
        keyExtractor={item => item.id}
        extraData={selectedDeckId}
        renderItem={({ item }) => {
          return (
            <DeckCard 
            item={item}
            selectedDeckId={selectedDeckId}
            setSelectedDeckId={setSelectedDeckId}
            swipeLeftFunction={incrementCard}
            swipeRightFunction={decrementCard}
            rowRefs={rowRefs}
            navigation={navigation}
            />
          )
        }}
        
        />
    </View>
  );
  
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: '#ffffff',
    },
  });

export default DeckScreen