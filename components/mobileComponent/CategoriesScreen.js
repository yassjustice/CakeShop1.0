import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { styled } from 'tailwindcss-react-native';
import ImageGallery from './imageGallery';

const Container = styled(View);
const Title = styled(Text);

export default function CategoriesScreen() {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Container className="flex-1 items-center pt-5 bg-white">
        <Title style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginBottom: 10, padding: 10 }}>Explore Our Cake & Patisserie Collections</Title>
        <ImageGallery />
      </Container>
    </ScrollView>
  );
}
