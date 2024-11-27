import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for icons
import { useCart } from "../../context/CartContext"; // Import the cart context

const TopSellersList = ({ title, data, onViewAllPress }) => {
  // State for managing favorites
  const [favoriteList, setFavoriteList] = useState([]);
  
  // Access cart context
  const { addToCart, cart } = useCart();

  // Handler to toggle favorites
  const handleFavoritesToggle = (item) => {
    if (favoriteList.includes(item)) {
      setFavoriteList(favoriteList.filter((i) => i !== item));
      console.log("Item removed from Favorites:", item);
    } else {
      setFavoriteList((prevFavorites) => [...prevFavorites, item]);
      console.log("Item added to Favorites:", item);
    }
  };

  // Check if an item is already in the cart
  const isInCart = (item) => cart.some((cartItem) => cartItem.id === item.id);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onViewAllPress}>
          <Text style={styles.viewAll}> View All &gt; </Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal Top Sellers List */}
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.label}>{item.label}</Text>

            {/* Buttons */}
            <View style={styles.buttonsContainer}>
              {/* Add to Cart Button */}
              <TouchableOpacity
                style={styles.cartButton}
                onPress={() => {
                  if (!isInCart(item)) addToCart(item);
                }}
              >
                <Ionicons
                  name={isInCart(item) ? "cart" : "cart-outline"}
                  size={30}
                  color={isInCart(item) ? "#007AFF" : "#555"}
                />
              </TouchableOpacity>

              {/* Add to Favorites Button */}
              <TouchableOpacity
                style={styles.heartButton}
                onPress={() => handleFavoritesToggle(item)}
              >
                <Ionicons
                  name={favoriteList.includes(item) ? "heart" : "heart-outline"}
                  size={30}
                  color={favoriteList.includes(item) ? "red" : "#555"}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    paddingHorizontal: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  viewAll: {
    fontSize: 14,
    color: "#fcb55d",
  },
  itemContainer: {
    marginRight: 10,
    alignItems: "center",
    width: 120,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    fontWeight: "500",
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  cartButton: {
    marginHorizontal: 8,
  },
  heartButton: {
    marginHorizontal: 8,
  },
  flatListContainer: {
    paddingHorizontal: 16,
  },
});

export default TopSellersList;
