import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
// import { useCart } from "../context/CartContext"; // Assuming your context file path
// import CategoryHeader from "../components/CategoryHeader";
// import Tabs from "../components/Tabs";
// import ProductItem from "../components/ProductItem";
import { Ionicons } from "@expo/vector-icons";
import ProductItem from "../../components/mobileComponent/productItem";
import Tabs from "../../components/mobileComponent/tabs";
import CategoryHeader from "../../components/mobileComponent/categoryHeader";
import { categories } from "../../someData/Categories";
import { products } from "../../someData/Products";
import { useCart } from "../../context/CartContext";

const CategoryPage = ({ route, navigation }) => {
    console.log("route", route.params);
    // const { categoryName, categoryImage, subcategories, products } = route.params;
    const { category } = route.params;

    const { addToCart } = useCart();

    console.log("category", category);

    // Fetch category details
    const categoryDetails = categories.find((cat) => cat.name === category.title);
    
    const categoryProducts = products.filter((product) =>
        categoryDetails.productIds.includes(product.id)
    );

    // Fetch the category details based on the category name

    if (!categoryDetails) {
        return <Text>Category not found!</Text>; // Handle case where category is not found
    }

    //SubCategory
    // Get the subcategories for the category
    const subcategories = categoryDetails.subcategories;

    const [selectedTab, setSelectedTab] = useState("All");
    const filteredProducts = categoryProducts.filter(
        (product) =>
            selectedTab === "All" || product.subcategory === selectedTab
    );
    console.log("cat", categoryDetails)
    return (
        <View style={styles.container}>
            {/* Header */}
            <CategoryHeader
                categoryName={categoryDetails.name}
                categoryImage={categoryDetails.image}
                onBackPress={() => navigation.goBack()}
            />

            {/* Tabs */}
            <Tabs
                tabs={["All", ...subcategories]}
                selectedTab={selectedTab}
                onTabPress={setSelectedTab}
            />

            {/* Filter Row */}
            <View style={styles.filterRow}>
                <Text style={styles.productCount}>
                    {filteredProducts.length} products found
                </Text>
                <TouchableOpacity style={styles.filterButton}>
                    <Ionicons name="filter" size={20} color="black" />
                    <Text style={styles.filterText}>Sort</Text>
                </TouchableOpacity>
            </View>

            {/* Product List */}
            <FlatList
                data={filteredProducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ProductItem
                        product={item}
                        onAddToCart={(product) => {
                            // Add to cart logic here
                            addToCart(product)
                        }}
                    />
                )}
                contentContainerStyle={styles.productList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FEF7FF",
    },
    filterRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    productCount: {
        fontSize: 16,
        fontWeight: "bold",
    },
    filterButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    filterText: {
        fontSize: 14,
        marginLeft: 5,
    },
    productList: {
        paddingHorizontal: 10,
    },
});

export default CategoryPage;
