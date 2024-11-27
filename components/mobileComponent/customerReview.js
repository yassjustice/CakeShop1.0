import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const CustomerReviews = ({ title, reviews }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>{title}</Text>

      {/* Horizontal Carousel for Reviews */}
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <View style={styles.reviewCard}>
            <Image source={item.profileImage} style={styles.profileImage} />
            <Text style={styles.customerName}>{item.name}</Text>
            <Text style={styles.reviewText}>"{item.review}"</Text>
            <View style={styles.ratingContainer}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Text
                  key={index}
                  style={[
                    styles.star,
                    { color: index < item.rating ? "#FFD700" : "#CCC" },
                  ]}
                >
                  ★
                </Text>
              ))}
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.8 + 16} // Snap effect
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    // height: 250,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginHorizontal: 16,
    marginBottom: 12,
  },
  reviewCard: {
    width: width * 0.8,
    padding: 19,
    marginRight: 16,
    marginBottom: 10,
    borderRadius: 16,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
    alignSelf: "center",
  },
  customerName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: 4,
  },
  reviewText: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#555",
    textAlign: "center",
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 4,
  },
  star: {
    fontSize: 16,
    marginHorizontal: 2,
  },
});

export default CustomerReviews;
