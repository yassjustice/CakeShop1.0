import React from "react";
import { View, Image, Dimensions } from "react-native";

const ImageGrid = ({ images }) => {
    const screenWidth = Dimensions.get("window").width;
    const imageWidth = screenWidth > 400 ? "48%" : "100%"; // 48% for larger screens, 100% for mobile

    return (
        <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 16, backgroundColor: "white" }}>
            {images.map((image, index) => (
                <Image
                    key={index}
                    source={image.src}
                    style={{
                        width: imageWidth,
                        // height: undefined,
                        aspectRatio: image.aspectRatio || 1.5,
                        borderRadius: 10,
                        marginBottom: 16,
                    }}
                    resizeMode="contain"
                />
            ))}
        </View>
    );
};

export default ImageGrid;
