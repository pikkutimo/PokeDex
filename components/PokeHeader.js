import React from "react";
import { Text, StyleSheet, SafeAreaView, Image, View } from 'react-native';

const PokeHeader = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Image source={require('../assets/pokeball.png')} style={styles.logo}/>
          <Text style={styles.name}>PokeDex</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 20,
      marginBottom: 10,
      backgroundColor: '#ffffff',
    },
    logo: {
      width: 40,
      height: 40,
      marginRight: 10,
    },
    name: {
      textAlignVertical: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      color: '#3b4cca'
    }
  });

export default PokeHeader