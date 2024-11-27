import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    Button,
    TextInput,
    ScrollView,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"; // Make sure you have this package installed for the icon
import GridListCake from "./gridListCake";
import OfferCarousel from "./OfferCarousel";
import HorizontalList from "./horizontalList";
import TopSellersList from "./horizontalTopList";
import CustomerReviews from "./customerReview";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen({ navigation }) {
    const sections = [
        { id: "1", title: "Your Sweet Journey Begins Here", type: "hero" },
        { id: "2", title: "Search Box", type: "Search" },
        { id: "3", title: "Special Offers", type: "offer" },
        { id: "4", title: "Top Selling Cakes", type: "TopSelling" },
        { id: "5", title: "Featured Cakes", type: "featured" },
        { id: "6", title: "Seasonal Specials", type: "seasonal" },
        { id: "7", title: "What Our Customers Say", type: "reviews" },
        { id: "8", title: "Create Your Custom Cake", type: "customOrder" },
    ];

    const seasonalSpecials = [
        {
            id: "1",
            label: "Cake1",
            image: require("../../assets/cake-hero.jpg"),
        },
        {
            id: "2",
            label: "Cake2",
            image: require("../../assets/cake-hero.jpg"),
        },
        {
            id: "3",
            label: "Cake2",
            image: require("../../assets/cake-hero.jpg"),
        },
        {
            id: "4",
            label: "Cake2",
            image: require("../../assets/cake-hero.jpg"),
        },
        {
            id: "5",
            label: "Cake2",
            image: require("../../assets/cake-hero.jpg"),
        },
    ];
    const topSellers = [
        {
            id: "1",
            label: "Cake1",
            image: require("../../assets/cake-hero.jpg"),
            price: 14.99,
        },
        {
            id: "2",
            label: "Cake2",
            image: require("../../assets/cake-hero.jpg"),
            price: 14.99,
        },
        {
            id: "3",
            label: "Cake2",
            image: require("../../assets/cake-hero.jpg"),
            price: 14.99,
        },
        {
            id: "4",
            label: "Cake2",
            image: require("../../assets/cake-hero.jpg"),
            price: 14.99,
        },
        {
            id: "5",
            label: "Cake2",
            image: require("../../assets/cake-hero.jpg"),
            price: 14.99,
        },
    ];

    const reviews = [
        {
            id: "1",
            name: "Sarah J.",
            profileImage: require("../../assets/cupcakes.jpg"),
            review: "The best cakes I've ever tasted! Highly recommended.",
            rating: 5,
        },
        {
            id: "2",
            name: "John D.",
            profileImage: require("../../assets/cupcakes.jpg"),
            review: "Amazing service and delicious pastries!",
            rating: 4,
        },
        {
            id: "3",
            name: "Emma L.",
            profileImage: require("../../assets/cupcakes.jpg"),
            review: "A delightful experience every time. Love it!",
            rating: 5,
        },
        {
            id: "4",
            name: "Michael K.",
            profileImage: require("../../assets/cupcakes.jpg"),
            review: "Great variety of treats, and everything is fresh.",
            rating: 4,
        },
    ];

    const handleViewAll = () => {
        navigation.navigate("FavoritesTab"); // Example navigation
    };
    const handleViewAllTopSellers = () => {
        navigation.navigate("FavoritesTab"); // Example navigation
    };

    const renderSection = ({ item }) => {
        switch (item.type) {
            case "hero":
                return <Text style={styles.heroText}>{item.title}</Text>;
            case "Search":
                return (
                    <View style={styles.searchBox}>
                        <Ionicons
                            name="search"
                            size={20}
                            color="#000"
                            style={styles.searchIcon}
                        />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="What delicious treat are you craving?"
                            placeholderTextColor="#AAA"
                        />
                    </View>
                );
            case "offer":
                return (
                    <View style={[styles.section, styles.carou]}>
                        <Text style={styles.sectionTitle}>{item.title}</Text>
                        {/* <Image
                                source={require("../../assets/banner20percent.jpeg")}
                                style={styles.banner}
                            /> */}
                        <OfferCarousel />
                    </View>
                );
            case "featured":
                return (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{item.title}</Text>
                        <GridListCake />
                    </View>
                );
            case "TopSelling":
                return (
                    <TopSellersList
                        title="Top Ventes"
                        data={topSellers}
                        onViewAllPress={handleViewAllTopSellers}
                    />
                );
            case "seasonal":
                return (
                    // <ScrollView style={styles.HscrollViewContainer}>
                        <HorizontalList
                            title="Discover Our Seasonal Specials"
                            data={seasonalSpecials}
                            onViewAllPress={handleViewAll}
                        />
                    // </ScrollView>
                );
            case "reviews":
                return (
                    // <View style={styles.customerReview}>
                    <View style={styles.section}>
                        {/* <Text style={styles.sectionTitle}>{item.title}</Text> */}
                        {/* Add FlatList for featured/seasonal/reviews */}
                        {/* </View> */}
                        <CustomerReviews
                            title="What Our Customers Say"
                            reviews={reviews}
                        />
                    </View>
                );

            case "customOrder":
                return (
                    <View style={[styles.section, styles.customOrderSection]}>
                        <Text style={styles.sectionTitle}>{item.title}</Text>
                        <Text style={styles.customOrderTagline}>
                            Craft a cake as unique as you are!
                        </Text>
                        <TouchableOpacity
                            style={styles.customOrderButton}
                            onPress={() =>
                                navigation.navigate("CustomOrderScreen")
                            }
                        >
                            <LinearGradient
                                colors={["#FF7E79", "#FF6A6A"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.customOrderGradient}
                            >
                                <MaterialCommunityIcons
                                    name="cake-variant"
                                    size={20}
                                    color="#fff"
                                    style={styles.buttonIcon}
                                />
                                <Text style={styles.buttonText}>Start Now</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                );

            default:
                return null;
        }
    };

    return (
        <FlatList
            style={{ backgroundColor: "white" }}
            data={sections}
            renderItem={renderSection}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<View style={styles.container}></View>}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    HscrollViewContainer: {
        flex: 1,
        backgroundColor: "white",
    },
    customerReview: {
        // height: 250,
    },
    heroText: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 16,
    },
    section: {
        marginVertical: 16,
        paddingHorizontal: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    banner: {
        width: "100%",
        height: 120,
        borderRadius: 8,
    },
    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        margin: 16,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: "#000",
    },
    carou: {
        borderRadius: 8,
        overflow: "hidden", // Ensures children like the carousel respect the radius
    },
    customOrderSection: {
        alignItems: "center",
        paddingVertical: 20,
        backgroundColor: "#FFF0F3",
        borderRadius: 12,
        elevation: 3,
    },
    customOrderTagline: {
        fontSize: 16,
        color: "#FF6A6A",
        textAlign: "center",
        marginVertical: 10,
        fontWeight: "600",
    },
    customOrderButton: {
        marginTop: 20,
        borderRadius: 25,
        overflow: "hidden",
        elevation: 4,
    },
    customOrderGradient: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    buttonIcon: {
        marginRight: 8,
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "600",
    },
});
