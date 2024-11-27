import React, { useState } from "react";
import { View, FlatList, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For heart and cart icons

// Sample data for cakes
const cakes = [
    { id: "1", image: require("../../assets/birthday-cake.jpg"), name: "Birthday Cake" },
    { id: "2", image: require("../../assets/cupcakes.jpg"), name: "Cupcakes" },
    { id: "3", image: require("../../assets/BackGHero.jpeg"), name: "Hero Cake" },
    { id: "4", image: require("../../assets/special-occasion-cake.jpg"), name: "Special Occasion" },
    { id: "5", image: require("../../assets/wedding-cake.jpg"), name: "Wedding Cake" },
    { id: "6", image: require("../../assets/category-5.jpg"), name: "Chocolate Cake" },
    { id: "7", image: require("../../assets/category-6.jpg"), name: "Fruit Cake" },
    { id: "8", image: require("../../assets/weddingCaki.jpeg"), name: "Luxury Wedding" },
];

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;

const GridListCake = () => {
    // State to manage the wishlist and cart
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);

    // Toggle heart button functionality (for wishlist)
    const toggleWishlist = (item) => {
        if (wishlist.includes(item.id)) {
            setWishlist(wishlist.filter((id) => id !== item.id)); // Remove item from wishlist
        } else {
            setWishlist([...wishlist, item.id]); // Add item to wishlist
        }
    };

    // Toggle cart button functionality (for cart)
    const toggleCart = (item) => {
        if (cart.includes(item.id)) {
            setCart(cart.filter((id) => id !== item.id)); // Remove item from cart
        } else {
            setCart([...cart, item.id]); // Add item to cart
        }
    };

    // Render each cake item in the grid
    const renderItem = ({ item }) => {
        return (
            <View style={styles.cakeItemContainer}>
                <TouchableOpacity style={styles.cakeImageWrapper}>
                    <Image source={item.image} style={styles.cakeImage} />
                </TouchableOpacity>
                <Text style={styles.cakeTitle}>{item.name}</Text>

                {/* Container for heart and cart buttons */}
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.heartButton}
                        onPress={() => toggleWishlist(item)}
                    >
                        <Ionicons
                            name={wishlist.includes(item.id) ? "heart" : "heart-outline"}
                            size={30}
                            color={wishlist.includes(item.id) ? "red" : "#555"}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cartButton}
                        onPress={() => toggleCart(item)}
                    >
                        <Ionicons
                            name={cart.includes(item.id) ? "cart" : "cart-outline"}
                            size={30}
                            color={cart.includes(item.id) ? "#007AFF" : "#555"}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cakes}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={numColumns}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContentContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 16,
    },
    listContentContainer: {
        paddingHorizontal: 8,
    },
    cakeItemContainer: {
        flex: 1,
        margin: 8,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    cakeImageWrapper: {
        width: "100%",
        height: 220,
        borderRadius: 12,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    cakeImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: 12,
    },
    cakeTitle: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        textAlign: "center",
        paddingHorizontal: 8,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 8,
    },
    heartButton: {
        marginHorizontal: 12,
    },
    cartButton: {
        marginHorizontal: 12,
    },
});

export default GridListCake;
