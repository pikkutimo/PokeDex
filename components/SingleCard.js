import React, { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addCard } from "../redux/deckSlice";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
// import { TapGestureHandler, State } from 'react-native-gesture-handler';
// import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const Item = ({ item, onPress, onLongPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={[styles.item, backgroundColor]}>
        <Image style={styles.tinyPic} source={{uri: item.images.small}} />
        <View>
          <Text style={[styles.title, textColor]}>{item.name}</Text>
          <Text style={[styles.info, textColor]}>LEVEL: {item.level} HP: {item.hp}</Text>
        </View>
    </TouchableOpacity>
  );

const SingleCard = ({ item, selectedId, setSelectedId }) => {
    const backgroundColor = item.id === selectedId ? "#b3a125" : "#ffde00";
    const color = item.id === selectedId ? '#000000' : '#3b4cca';
    const dispatch = useDispatch();
    const deck = useSelector(state => state.deck.deckList);
    const len = deck.length;

    return (
        <Fragment>
            <Item
                item={item}
                onLongPress={() => {
                  dispatch(addCard(item))
                  alert(`Card added to deck! ${item.id}`)
                }}
                onPress={() => {
                  setSelectedId(item.id)
                }}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        </Fragment>
      
    );
};


const styles = StyleSheet.create({
    tinyPic: {
        width: 50,
        height: 70,
    },
    title: {
        paddingLeft: 20,
        fontSize: 32,
        fontFamily: 'Inter_900Black',
    },
    info: {
        paddingLeft: 20,
        fontSize: 20
    },
    item: {
      flexDirection: "row",
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderColor: '#3b4cca',
      borderWidth: 5,
      backgroundColor: '#ffdd00',
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
    },
  });

export default SingleCard