import React from "react";

import logoDesign from "../../assets/cakeLogo.png"
import logoDesign1 from "../../assets/favicon.png"

import { View, TouchableOpacity, Text, ImageBackground, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import screens
import AboutUsScreen from "../../components/mobileComponent/AboutUsScreen";
import ContactUsScreen from "../../components/mobileComponent/ContactUsScreen";
import AgreementsScreen from "../../components/mobileComponent/AgreementsScreen";
import PoliciesScreen from "../../components/mobileComponent/PoliciesScreen";
import NotificationsScreen from "../../components/mobileComponent/NotificationsScreen";

import { Ionicons } from "@expo/vector-icons";
import BottomTabs from "./BottomTabs";
import { Asset } from "expo-asset";

const Drawer = createDrawerNavigator();

// Main Screen with Burger and Notification Icons
export default function MainScreenWithIcons() {
    const logo1 = Asset.fromModule(require('../../assets/cakeLogo.png')).uri;
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator
                initialRouteName="MainTabs"
                screenOptions={({ navigation }) => ({
                    headerLeft: () => (
                        // Placeholder for the logo
                        <View style={{ paddingLeft: 15 }}>
                        <Image
                            source={logoDesign}
                            style={{
                                width: 100, // adjust width to fit header
                                height: 100, // adjust height to keep aspect ratio
                                resizeMode: "contain",
                                // padding: 10, 
                                // margin: 10,
                            }}
                        />
                    </View>
                    ),
                    headerRight: () => (
                        <View
                            style={{ flexDirection: "row", paddingRight: 10 }}
                        >
                            {/* Notification Icon */}
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("Notifications")
                                }
                            >
                                <Ionicons
                                    name="notifications-outline"
                                    size={29}
                                    color="black"
                                    style={{ marginRight: 15 }}
                                />
                            </TouchableOpacity>
                            {/* Burger Menu Icon */}
                            <TouchableOpacity
                                onPress={() => navigation.openDrawer()}
                            >
                                <Ionicons
                                    name="menu-outline"
                                    size={29}
                                    color="black"
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: "#FFF", // Set the background color of the top bar
                        height: 100, // Adjust the height of the header
                        shadowOpacity: 0, // Remove any shadow if you want a flat header
                      },
                })}
            >
                <Drawer.Screen
                    name="MainTabs"
                    component={BottomTabs}
                    options={{ title: "Home" }}
                />
                <Drawer.Screen
                    name="Notifications"
                    component={NotificationsScreen}
                />
                <Drawer.Screen name="About Us" component={AboutUsScreen} />
                <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
                <Drawer.Screen name="Agreements" component={AgreementsScreen} />
                <Drawer.Screen name="Policies" component={PoliciesScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}