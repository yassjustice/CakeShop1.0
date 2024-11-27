import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
    const { removeFromCart, updateQuantity } = useCart();

    const handleQuantityChange = (quantity) => {
        const numericQuantity = parseInt(quantity, 10) || 1; // Default to 1 if invalid
        updateQuantity(item.id, numericQuantity);
    };

    return (
        <View style={styles.container}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>${(item.price ?? 0).toFixed(2)}</Text>
                <View style={styles.quantityContainer}>
                    <Text>Qty:</Text>
                    <TextInput
                        style={styles.quantityInput}
                        keyboardType="numeric"
                        value={item.quantity?.toString() || "1"} // Default to "1" if undefined
                        onChangeText={handleQuantityChange}
                    />
                </View>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 8,
        marginVertical: 8,
        padding: 16,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    details: {
        flex: 1,
        marginLeft: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    price: {
        marginTop: 4,
        color: "#888",
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    quantityInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        padding: 4,
        marginLeft: 8,
        width: 40,
        textAlign: "center",
    },
    removeButton: {
        paddingHorizontal: 8,
    },
    removeButtonText: {
        color: "#f00",
        fontWeight: "bold",
    },
});

export default CartItem;
