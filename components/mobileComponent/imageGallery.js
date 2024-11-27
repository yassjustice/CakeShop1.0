import React from "react";
import { View } from "react-native";
import ImageGrid from "./imageGrid";
import { categories } from "../../someData/Categories";

// const images = [
//     {
//         src: require("../../assets/birthday-cake.jpg"),
//         title: "Pâtisserie grand format",
//     },
//     {
//         src: require("../../assets/weddingCaki.jpeg"),
//         title: "Pâtisserie grand format1",
//     },
//     {
//         src: require("../../assets/wedding-cake.jpg"),
//         title: "Pâtisserie grand format2",
//     },
//     {
//         src: require("../../assets/special-occasion-cake.jpg"),
//         title: "Pâtisserie grand format3",
//     },
//     {
//         src: require("../../assets/cupcakes.jpg"),
//         title: "Pâtisserie grand format4",
//     },
//     {
//         src: require("../../assets/cakeBig.jpeg"),
//         title: "Pâtisserie grand format5",
//     },
//     {
//         src: require("../../assets/weddingCaki.jpeg"),
//         title: "Pâtisserie grand format6",
//     },
//     {
//         src: require("../../assets/weddingCaki.jpeg"),
//         title: "Pâtisserie grand format7",
//     },
//     {
//         src: require("../../assets/weddingCaki.jpeg"),
//         title: "Pâtisserie grand format7",
//     },
//     {
//         src: require("../../assets/weddingCaki.jpeg"),
//         title: "Pâtisserie grand format7",
//     },
//     {
//         src: require("../../assets/weddingCaki.jpeg"),
//         title: "Pâtisserie grand format7",
//     },
//     {
//         src: require("../../assets/weddingCaki.jpeg"),
//         title: "Pâtisserie grand format7",
//     },
//     {
//         src: require("../../assets/weddingCaki.jpeg"),
//         title: "Pâtisserie grand format7",
//     },
//     {
//         src: require("../../assets/weddingCaki.jpeg"),
//         title: "Pâtisserie grand format7",
//     },
//     {
//         src: require("../../assets/weddingCaki.jpeg"),
//         title: "Pâtisserie grand format7",
//     },
//     {
//         src: require("../../assets/weddingCaki.jpeg"),
//         title: "Pâtisserie grand format7",
//     },
//     {
//         src: require("../../assets/weddingCaki.jpeg"),
//         title: "Pâtisserie grand format7",
//     },
//     {
//         src: require("../../assets/weddingCaki.jpeg"),
//         title: "Pâtisserie grand format7",
//     },
//     {
//         src: require("../../assets/weddingCaki.jpeg"),
//         title: "Pâtisserie grand format7",
//     },
//     {
//         src: require("../../assets/weddingCaki.jpeg"),
//         title: "Pâtisserie grand format7",
//     },
//     {
//         src: require("../../assets/weddingCaki.jpeg"),
//         title: "Pâtisserie grand format7",
//     },
// ];

const ImageGallery = () => {


      // Extract the images and titles from categories
      const images = categories.map((category) => {
        // console.log("Mapping category:", category); 
        // console.log("mapping images", category.image);
        return {
            src: category.image,
            title: category.name,
        };
    });


    return (
        <View className="w-full px-4">
            <ImageGrid images={images} />
        </View>
    );
};

export default ImageGallery;
