import React from 'react';
import { View, Text, Image } from 'react-native';
import MasonryList from 'react-native-masonry-list/src/MasonryList';
// import {MasonryList} from 'react-native-masonry-list';


const GridListCake = () => {
  const cakes = [
    { id: "1", uri: require("../../assets/birthday-cake.jpg") },
    { id: "2", uri: require("../../assets/cupcakes.jpg") },
    { id: "3", uri: require("../../assets/BackGHero.jpeg") },
    { id: "4", uri: require("../../assets/special-occasion-cake.jpg") },
    { id: "5", uri: require("../../assets/wedding-cake.jpg") },
    { id: "6", uri: require("../../assets/category-5.jpg") },
    { id: "7", uri: require("../../assets/category-6.jpg") },
    { id: "8", uri: require("../../assets/weddingCaki.jpeg") },
  ];

  return (
    <View style={{ flex: 1 }}>
      <MasonryList
        data={cakes}
        renderItem={({ item }) => (
          <View key={item.id} style={{ marginBottom: 10 }}>
            <Image
              source={item.uri} // Using local image URI
              style={{ width: 164, height: 200 }} // Default dimensions
            />
            <Text>Cake {item.id}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default GridListCake;
