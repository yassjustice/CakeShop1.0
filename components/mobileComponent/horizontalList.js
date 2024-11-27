import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const HorizontalList = ({ title, data, onViewAllPress }) => {
  return (
    <View style={styles.container}>
      {/* Header with title and "View All" link */}
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onViewAllPress}>
        <Text style={styles.viewAll}> View All &gt; </Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal scrollable list */}
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.label}>{item.label}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  viewAll: {
    fontSize: 14,
    color: "#fcb55d",
  },
  itemContainer: {
    marginRight: 16,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
});

export default HorizontalList;
