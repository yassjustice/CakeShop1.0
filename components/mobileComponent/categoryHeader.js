import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CategoryHeader = ({ categoryName, categoryImage, onBackPress }) => {
    return (
        <View style={styles.container}>
            {/* {console.log("category image in the categoryHeaderFile",categoryImage)} */}
            <Image source={categoryImage} style={styles.image} />
            <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.categoryName}>{categoryName}</Text>
        </View>
        // <>
        // <Text>
        //     Hi
        // </Text>
        // </>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
    },
    image: {
        width: "100%",
        height: 190,
        resizeMode: "cover",
    },
    backButton: {
        position: "absolute",
        top: 20,
        left: 15,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: 20,
        padding: 5,
    },
    categoryName: {
        position: "absolute",
        bottom: 10,
        left: 15,
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
});

export default CategoryHeader;
