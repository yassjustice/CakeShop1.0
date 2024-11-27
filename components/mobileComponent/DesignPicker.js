import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function DesignPicker({ selectedDesign, onSelectDesign }) {
    const designs = ["Classic", "Modern", "Themed", "Minimalistic"];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose Cake Design</Text>
            <View style={styles.options}>
                {designs.map((design) => (
                    <TouchableOpacity
                        key={design}
                        style={[
                            styles.option,
                            selectedDesign === design && styles.selectedOption,
                        ]}
                        onPress={() => onSelectDesign(design)}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedDesign === design && styles.selectedText,
                            ]}
                        >
                            {design}
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
