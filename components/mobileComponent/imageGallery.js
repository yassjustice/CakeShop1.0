import React from 'react';
import { View } from 'react-native';
import ImageGrid from './imageGrid';

const images = [
  { src: require('../../assets/birthday-cake.jpg'), aspectRatio: 1 },
  { src: require('../../assets/weddingCaki.jpeg'), aspectRatio: 1 },
  { src: require('../../assets/wedding-cake.jpg'), aspectRatio: 1 },
  { src: require('../../assets/special-occasion-cake.jpg'), aspectRatio: 1 },
  { src: require('../../assets/cupcakes.jpg'), aspectRatio: 1 },
  { src: require('../../assets/cakeBig.jpeg'), aspectRatio: 1 },
  { src: require('../../assets/weddingCaki.jpeg'), aspectRatio: 1 },
  { src: require('../../assets/weddingCaki.jpeg'), aspectRatio: 1 },
];

const ImageGallery = () => (
  <View className="w-full px-4">
    <ImageGrid images={images} />
  </View>
);

export default ImageGallery;
