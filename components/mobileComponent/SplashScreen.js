import React, { useCallback, useEffect, useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import * as Font from "expo-font"; // Import expo-font

// Path to the cakeBig image
import cakeBig from "../../assets/cakeBig.jpeg"; // Make sure this path is correct
import styles from "../../css/cssMobile/splashScreenStyle"; // Adjust the path if necessary
import AppLoading from "expo-app-loading";
import * as SplashScreen1 from "expo-splash-screen";
import { LinearGradient } from "expo-linear-gradient";

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        // setTimeout(() => {
        //   navigation.replace('Main');  // Navigates to the Home after 3 seconds
        // }, 3000);
    }, []);

    const [fontsLoaded, setFontsLoaded] = useState(false);
    

    useEffect(() => {
        async function loadFontsAndShowApp() {
            try {
                // Prevent expo splash screen from auto-hiding
                await SplashScreen1.preventAutoHideAsync();

                // Load fonts
                await Font.loadAsync({
                    "PlayfairDisplay-Regular": require("../../assets/fonts/PlayfairDisplay-Regular.ttf"),
                    "PlayfairDisplay-Bold": require("../../assets/fonts/PlayfairDisplay-Bold.ttf"),
                    "Tiny5-Regular": require("../../assets/fonts/Tiny5-Regular.ttf"),
                });

                setFontsLoaded(true);
            } catch (error) {
                console.warn(error);
            } finally {
                // Hide the expo splash screen after fonts are loaded
                await SplashScreen1.hideAsync();
            }
        }

        loadFontsAndShowApp();
    }, []);

    if (!fontsLoaded) {
        return null; // Render nothing until fonts are fully loaded
    }

    // console.log(fontsLoaded);
        // Handle button press
        const handlePress = () => {
            console.log("Button pressed!"); // Log when button is pressed
            // Here, you can navigate or execute other actions
            navigation.navigate('Main'); // Uncomment to navigate to another screen
        };

    return (
        <ImageBackground source={cakeBig} style={styles.background}>
            {/* CTA Button */}
            <TouchableOpacity 
            style={styles.ctaButton}
            // style={[styles.ctaButton, { backgroundColor: 'rgba(255, 0, 0, 0.5)' }]}
            // style={[styles.ctaButton, { backgroundColor: 'rgba(255, 0, 0, 0.5)', borderColor: 'black', borderWidth: 2 }]}
            activeOpacity={0.7}
            onPress={handlePress} 
            >
                <LinearGradient
                    colors={[
                        "rgba(255, 255, 255, 0.6)",
                        "rgba(153, 153, 153, 0)",
                    ]}
                    style={styles.buttonGradient}
                >
                    <Text style={styles.buttonText}>Browse Cakes</Text>
                </LinearGradient>
            </TouchableOpacity>
            {/* Mask layer */}
            <View 
            style={styles.overlay}
            // style={[styles.overlay, { backgroundColor: 'rgba(255, 255, 0, 0.5)' }]}
            >
                <LinearGradient
                    colors={[
                        "rgba(24, 24, 25, 0)", // Start of gradient, fully transparent
                        "rgba(255, 255, 255, 0.6)", // Middle of gradient, partially transparent white
                        "#FFFFFF", // End of gradient, fully white
                    ]}
                    style={styles.gradientOverlay}
                    start={{ x: 0.5, y: 0.8 }}
                    end={{ x: 0.5, y: 0.96 }}
                />
            </View>
            {/* Mask layer end */}
            <View>
                <View style={styles.heroTextContainer}>
                    <Text style={styles.celebrate}>Celebrate</Text>
                    <Text style={styles.life}>Life</Text>
                    <Text style={styles.with}>With</Text>
                    <Text style={styles.every}>Every</Text>
                    <Text style={styles.bite}>Bite</Text>
                    {/* <Text style={{ fontFamily: 'PlayfairDisplay-Regular', fontSize: 24, color: 'black' }}>Celebrate Life</Text> */}
                </View>
            </View>
            {/* New Description Section */}
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionHeader}>
                    Endless Sweet Delights
                </Text>
                <Text style={styles.descriptionText}>
                    Savor our selection of cakes, cupcakes, and cookies, crafted
                    to delight every bite.
                </Text>
            </View>
        </ImageBackground>
    );
}
