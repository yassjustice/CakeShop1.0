import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";

const ImageGrid = ({ images }) => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get("window").width;
    const fullWidth = screenWidth - 32; // Full width (with padding)
    const halfWidth = (screenWidth - 48) / 2; // Two images per row (with spacing)

    // Define the layout pattern: 1 image, then 2 images, and so on
    //   const layoutPattern = [];
    //   for (let i = 0; i < images.length; i++) {
    //     if (i % 3 === 0) layoutPattern.push([images[i]]); // Full-width image
    //     else layoutPattern.push(images.slice(i, i + 2)); // Two images in a row
    //     i++; // Skip to the next full-width image
    //   }

    // Define the layout pattern: strictly 1-2-1-2-1-2
    const layoutPattern = [];
    let i = 0;
    while (i < images.length) {
        layoutPattern.push([images[i]]); // Add a full-width image
        i++;
        if (i < images.length) {
            layoutPattern.push(images.slice(i, i + 2)); // Add two half-width images
            i += 2;
        }
    }

    const handleCategoryPress = (category) => {
        navigation.navigate("CategoryScreenList", { category });
        // navigation.navigate("Policies", { category });

    };

    return (
        <View style={styles.container}>
            {layoutPattern.map((row, rowIndex) => (
                <View
                    key={rowIndex}
                    style={[
                        styles.row,
                        row.length === 1
                            ? styles.fullWidthRow
                            : styles.halfWidthRow,
                    ]}
                >
                    {/* {console.log("Category", row)} */}
                    {row.map((image, index) => (
                        <TouchableOpacity
                            key={index}
                            style={{ marginBottom: 16 }}
                            onPress={() => handleCategoryPress(image )}
                        >
                            {console.log("image", image)}
                            {/* {console.log("imageSrc", image.src)} */}
                          {/* {console.log("index", index)} */}
                            <View style={{ position: "relative" }}>
                                <Image
                                        source={
                                            typeof image.src === "string" ? { uri: image.src } : image.src
                                        }
                                    style={[
                                        styles.image,
                                        row.length === 1
                                            ? {
                                                  width: fullWidth,
                                                  height: fullWidth * 0.5,
                                              } // Full-width image
                                            : {
                                                  width: halfWidth,
                                                  height: halfWidth * 0.75,
                                              }, // Half-width images
                                    ]}
                                    resizeMode="cover"
                                />
                                {/* Overlay for text */}
                                <View
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                                        padding: 8,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "white",
                                            fontSize: 14,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {image.title}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: "#FEF7FF",
    },
    row: {
        flexDirection: "row",
        marginBottom: 16,
    },
    fullWidthRow: {
        justifyContent: "center",
    },
    halfWidthRow: {
        justifyContent: "space-evenly",
    },
    image: {
        borderRadius: 10,
        overflow: "hidden",
    },
});

export default ImageGrid;
