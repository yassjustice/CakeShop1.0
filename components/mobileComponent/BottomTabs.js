import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../../components/mobileComponent/HomeScreen";
import CategoriesScreen from "../../components/mobileComponent/CategoriesScreen";
import FavoritesScreen from "../../components/mobileComponent/FavoritesScreen";
import OurShopsScreen from "../../components/mobileComponent/OurShopsScreen";
import SettingsScreen from "../../components/mobileComponent/SettingsScreen";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

// Bottom Tabs with 5 sections and icons
export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case "HomeTab":
                            iconName = "home-outline";
                            break;
                        case "CategoriesTab":
                            iconName = "list-outline";
                            break;
                        case "FavoritesTab":
                            iconName = "heart-outline";
                            break;
                        case "OurShopsTab":
                            iconName = "storefront-outline";
                            break;
                        case "SettingsTab":
                            iconName = "settings-outline";
                            break;
                    }
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { height: 60, paddingBottom: 5 },
                // tabBarStyle: { height: 60, paddingBottom: 5, backgroundColor: '#f0f0f0' }, 
            })}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{ title: "Home" }}
            />
            <Tab.Screen
                name="CategoriesTab"
                component={CategoriesScreen}
                options={{ title: "Categories" }}
            />
            <Tab.Screen
                name="FavoritesTab"
                component={FavoritesScreen}
                options={{ title: "Favorites" }}
            />
            <Tab.Screen
                name="OurShopsTab"
                component={OurShopsScreen}
                options={{ title: "Our Shops" }}
            />
            <Tab.Screen
                name="SettingsTab"
                component={SettingsScreen}
                options={{ title: "Settings" }}
            />
        </Tab.Navigator>
    );
}
