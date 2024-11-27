import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProductItem = ({ product, onAddToCart }) => {
    return (
        <View style={styles.container}>
            <Image source={ product.image } style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{product.name}</Text>
                {console.log(product.name)}
                <Text style={styles.description}>{product.description}</Text>
            </View>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => onAddToCart(product)}
            >
                <Ionicons name="add-circle" size={24} color="#4CAF50" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 10,
    },
    details: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        // color: "black",
    },
    description: {
        fontSize: 12,
        color: "#555",
    },
    addButton: {
        marginLeft: 10,
    },
});

export default ProductItem;
