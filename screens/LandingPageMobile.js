import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LandingPageMobile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Our Cake Shop (Mobile)</Text>
      <Image source={require('../assets/cake-hero.jpg')} style={styles.heroImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  heroImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
  },
  subText: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default LandingPageMobile;
