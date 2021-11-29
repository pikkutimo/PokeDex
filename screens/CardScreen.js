import * as React from 'react';
import {  View, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';


const CardScreen = ({ route, navigation }) => {

    const {itemId} = route.params;
    const cards = useSelector(state => state.collection.cardList);
    const card = cards.find(item => item.id === itemId)

    return (
      <View style={styles.ImageContainer}>
        <Image style={styles.Image} source={{uri: card.images.large}} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    Image: {
      resizeMode: 'contain',
      height: "100%",
      width: "100%", // 100% of the image container which is 90% of screen.
      alignSelf: 'center',
      resizeMode: 'contain'
   },
   ImageContainer: {
      width: '100%',
      alignSelf: 'center',
      justifyContent: 'center'
   }
  });

  export default CardScreen