import * as React from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import DeckCard from '../components/DeckCard';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const DeckScreen = ({ navigation }) => {

  const deck = useSelector(state => state.deck.deckList);
  const [selectedDeckId, setSelectedDeckId] = React.useState(null);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={deck}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
          <DeckCard item={item} selectedDeckId={selectedDeckId} setSelectedDeckId={setSelectedDeckId} />
        } />
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