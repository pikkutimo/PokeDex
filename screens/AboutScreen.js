import * as React from 'react';
import {  Text, View, StyleSheet, Image } from 'react-native';

const AboutScreen = ({ navigation, item }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
        <Image style={styles.tinyPic} source={require('../assets/my_photo.png')} />
        <Text style={styles.title}>PokeDecks</Text>
        <Text style={styles.info}>version 0.2.0</Text>
        <Text style={styles.info}>PokeDecks is my first foray into the world of React 
        Native. And who am I?</Text>
        <Text style={styles.info}>My name Timo Vilén and I am fourth year student at the Tampere
        University of Applied Sciences.</Text>
        
      </View>
    );
  }

const styles = StyleSheet.create({
  tinyPic: {
    width: 100,
    height: 100,
    borderColor: '#3b4cca',
    borderWidth: 5, 
  },
  title: {
    paddingLeft: 20,
    fontSize: 32,
    fontFamily: 'Inter_900Black',
    color:'#3b4cca',
  },
  info: {
    padding: 20,
    fontSize: 20,
    color:'#3b4cca',
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

export default AboutScreen