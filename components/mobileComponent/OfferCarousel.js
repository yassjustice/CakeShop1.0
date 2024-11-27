import React, { useState } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

// Get screen width for responsive design
const { width } = Dimensions.get("window");

const OfferCarousel = () => {
    // Sample data for special offers (replace these with your actual image paths)
    const offers = [
        require("../../assets/banner20percent.jpeg"),
        require("../../assets/banner20percent1.jpeg"),
        require("../../assets/banner40percent.jpeg"),
        require("../../assets/banner40percent1.jpeg"),
        require("../../assets/banner40percent2.jpeg"),
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const renderItem = ({ item }) => (
        <View style={styles.carouselItem}>
            <Image source={item} style={styles.carouselImage} />
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Carousel Component */}
            <Carousel
                renderItem={renderItem}
                width={width * 0.9}
                height={200}
                data={offers}
                loop
                autoPlay
                autoPlayInterval={3000}
                onSnapToItem={(index) => setActiveIndex(index)} // Update active index
            />
            {/* Pagination Dots */}
            <View style={styles.paginationContainer}>
                {offers.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            activeIndex === index && styles.activeDot, // Highlight the active dot
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        borderRadius: 8,
        overflow: "hidden",
    },
    carouselItem: {
        borderRadius: 8,
        height: 200,
        overflow: "hidden",
        elevation: 4,
    },
    carouselImage: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
    },
    paginationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#ccc",
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: "#ff6f61", // Active dot color (customize as needed)
    },
});

export default OfferCarousel;
