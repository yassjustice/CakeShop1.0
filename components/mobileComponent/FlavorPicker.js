import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function FlavorPicker({ selectedFlavor, onSelectFlavor }) {
    const flavors = ["Vanilla", "Chocolate", "Red Velvet", "Strawberry"];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose Cake Flavor</Text>
            <View style={styles.options}>
                {flavors.map((flavor) => (
                    <TouchableOpacity
                        key={flavor}
                        style={[
                            styles.option,
                            selectedFlavor === flavor && styles.selectedOption,
                        ]}
                        onPress={() => onSelectFlavor(flavor)}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedFlavor === flavor && styles.selectedText,
                            ]}
                        >
                            {flavor}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#444",
        marginBottom: 8,
    },
    options: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    option: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: "#FFF",
        borderRadius: 8,
        marginRight: 10,
        marginBottom: 10,
        elevation: 2,
    },
    selectedOption: {
        backgroundColor: "#FF6A6A",
    },
    optionText: {
        fontSize: 16,
        color: "#444",
    },
    selectedText: {
        color: "#fff",
    },
});
