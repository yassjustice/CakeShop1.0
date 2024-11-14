import React from "react";
import { View, FlatList, Image, StyleSheet, Dimensions } from "react-native";

const GridListCake = () => {
    // Sample data for cakes
    const cakes = [
        { id: "1", image: require("../../assets/birthday-cake.jpg") },
        { id: "2", image: require("../../assets/cupcakes.jpg") },
        { id: "3", image: require("../../assets/BackGHero.jpeg") },
        { id: "4", image: require("../../assets/special-occasion-cake.jpg") },
        { id: "5", image: require("../../assets/wedding-cake.jpg") },
        { id: "6", image: require("../../assets/category-5.jpg") },
        { id: "7", image: require("../../assets/category-6.jpg") },
        { id: "8", image: require("../../assets/weddingCaki.jpeg") },
        // Add more images here
    ];

    // Calculate number of columns based on screen width
    const numColumns = 2;
    const screenWidth = Dimensions.get("window").width;

    // Render each cake item in the grid
    const renderItem = ({ item }) => {
        console.log("Rendering item:", item.id);
        return (
            <View style={styles.cakeItemContainer}>
                <Image
                    source={item.image}
                    style={[
                        styles.cakeImage,
                        { width: screenWidth / numColumns - 24 },
                    ]}
                />
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
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: 16,
    },
    cakeItemContainer: {
        alignItems: "center",
        margin: 8,
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    cakeImage: {
        height: 250,
        resizeMode: "cover",
    },
});

export default GridListCake;
