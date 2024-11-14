import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import GridListCake from './gridListCake';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      {/* <Button title="Go to Menu" onPress={() => navigation.navigate('Menu')} /> */}
      <GridListCake></GridListCake>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
