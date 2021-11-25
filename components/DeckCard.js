import React, { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addCard } from "../redux/deckSlice";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';

const Item = ({ item, onPress, onLongPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={[styles.item, backgroundColor]}>
        <Image style={styles.tinyPic} source={{uri: item.images.small}} />
        <View>
          <Text style={[styles.title, textColor]}>{item.name}</Text>
          <Text style={[styles.info, textColor]}>LEVEL: {item.level} HP: {item.hp}</Text>
        </View>
        <Text style={styles.amount}>
          {item.numberOfCards}
        </Text>
    </TouchableOpacity>
  );

const DeckCard = ({ item, selectedDeckId, setSelectedDeckId }) => {
    const backgroundColor = item.id === selectedDeckId ? "#b3a125" : "#ffde00";
    const color = item.id === selectedDeckId ? '#000000' : '#3b4cca';
    const dispatch = useDispatch();

    return (
        <Fragment>
            <Item
                item={item}
                onLongPress={() => {
                  dispatch(addCard(item))
                  alert({len})
                }}
                onPress={() => {
                  setSelectedDeckId(item.id)
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
    amount: {
      paddingLeft: 20,
      color: '#3b4cca',
      fontSize: 40,
      fontFamily: 'Inter_900Black'
    },
    title: {
      textAlign: "right",
      paddingLeft: 20,
      fontSize: 32,
      fontFamily: 'Inter_900Black',
    },
    info: {
      paddingLeft: 20,
      fontSize: 20
    },
    item: {
      flex: 1,
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

export default DeckCard