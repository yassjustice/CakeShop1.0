import React from "react";

import logoDesign from "../../assets/ElegantCakeLogo.png"

import { View, TouchableOpacity, Text, ImageBackground } from "react-native";
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
import { Image } from "react-native-web";

const Drawer = createDrawerNavigator();

// Main Screen with Burger and Notification Icons
export default function MainScreenWithIcons() {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator
                initialRouteName="MainTabs"
                screenOptions={({ navigation }) => ({
                    headerLeft: () => (
                        // Placeholder for the logo
                        <View style={{ paddingLeft: 15 }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                Logo
                            </Text>
                            {/* <ImageBackground ></ImageBackground> */}
                            {/* <Image source={logoDesign}></Image> */}
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
                                    size={24}
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
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerTitle: "",
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