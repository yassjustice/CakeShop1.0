import React, { useRef, useEffect } from "react";
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // For the bag icon
import { useCart } from "../../context/CartContext"; // Import cart context
import CartItem from "./CartItem"; // Import individual cart item component

const CartListScreen = () => {
    const { cart, totalCost, clearCart } = useCart(); // Access cart context
    const spinValue = useRef(new Animated.Value(0)).current; // Ref for spin animation

    // Start spin animation if the cart is empty
    useEffect(() => {
        if (cart.length === 0) {
            Animated.loop(
                Animated.timing(spinValue, {
                    toValue: 1,
                    duration: 3000,
                    useNativeDriver: true,
                })
            ).start();
        }
    }, [cart]);

    // Interpolate spin value for rotation
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    return (
        <View style={styles.container}>
            {/* Header Title */}
            <Text style={styles.headerTitle}>My Cart</Text>

            {/* Show empty cart view if no items */}
            {cart.length === 0 ? (
                <View style={styles.emptyContainer}>
                    {/* Spinning bag icon */}
                    <Animated.View style={{ transform: [{ rotate: spin }] }}>
                        <FontAwesome
                            name="shopping-bag"
                            size={100}
                            color="#ccc"
                        />
                    </Animated.View>
                    <Text style={styles.emptyText}>Your cart is empty!</Text>
                    <Text style={styles.emptyDescription}>
                        Browse products and add them to your cart.
                    </Text>
                </View>
            ) : (
                <>
                    {/* Cart items list */}
                    <FlatList
                        data={cart}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <CartItem item={item} />}
                        contentContainerStyle={styles.listContent}
                    />

                    {/* Footer with total cost and clear button */}
                    <View style={styles.footer}>
                        <Text style={styles.totalText}>
                            Total: ${totalCost.toFixed(2)}
                        </Text>
                        <TouchableOpacity
                            onPress={clearCart}
                            style={styles.clearButton}
                        >
                            <Text style={styles.clearButtonText}>
                                Clear Cart
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9F9F9",
        padding: 16,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 16,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    emptyText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#555",
        marginTop: 16,
    },
    emptyDescription: {
        fontSize: 14,
        color: "#888",
        marginTop: 8,
        textAlign: "center",
        paddingHorizontal: 20,
    },
    listContent: {
        paddingBottom: 16,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderColor: "#ddd",
        elevation: 4,
    },
    totalText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    clearButton: {
        backgroundColor: "#f00",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    clearButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});

export default CartListScreen;
