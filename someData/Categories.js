export const categories = [
  {
      id: 1,
      name: "Birthday Cakes",
      image: require("../assets/birthday-cake.jpg"),
      subcategories: ["Kids' Cakes", "Adult Cakes"],
      productIds: [101, 102], // IDs of products in this category
  },
  {
      id: 2,
      name: "Wedding Cakes",
      image: require("../assets/wedding-cake.jpg"),
      subcategories: ["Elegant Cakes", "Traditional Cakes"],
      productIds: [103, 104],
  },
  {
      id: 3,
      name: "Desserts",
      image: require("../assets/cakeBig.jpeg"),
      subcategories: ["Cupcakes", "Pastries", "Mousses"],
      productIds: [105, 106, 107],
  },
];
