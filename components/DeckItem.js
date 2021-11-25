import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';

const RenderLeft = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 80],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  })

  const Style = {
    transform: [
      { scale }
    ]
  }
  return (
    <RectButton>
        <AntDesign style={styles.actionIcon} name="pluscircleo" size={32} color="black" />
      </RectButton>
  )
}

const RenderRight = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [-80, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  })

  const Style = {
    transform: [
      { scale }
    ]
  }
  return (
    <RectButton>
        <AntDesign style={styles.actionIcon} name="minuscircleo" size={32} color="black" />
      </RectButton>
  )
}

const DeckItem = ({ item, backgroundColor, textColor }) => (
  <Swipeable
    overshootRight={false}
    renderRightActions={RenderRight}
    overshootLeft={false}
    renderLeftActions={RenderLeft}>
    <View style={[styles.item, backgroundColor]}>
        <Image style={styles.tinyPic} source={{uri: item.images.small}} />
        <View>
          <Text style={[styles.title, textColor]}>{item.name}</Text>
          <Text style={[styles.info, textColor]}>LEVEL: {item.level} HP: {item.hp}</Text>
        </View>
        <Text style={styles.amount}>
          {item.numberOfCards}
        </Text>
    </View>
  </Swipeable>
  );

  const styles = StyleSheet.create({
    actionIcon: {
      alignItems: 'center',
      paddingTop: 50,
      width: 50,
      marginHorizontal: 10
    },
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

  export default DeckItem