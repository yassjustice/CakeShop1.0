import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import screens
import SplashScreen from "../../components/mobileComponent/SplashScreen";

import MainScreenWithIcons from "../../components/mobileComponent/MainScreenWithIcons";
import CustomOrderScreen from "../../components/mobileComponent/CustomOrderScreen";
import CategoryPage from "./CategoryScreenList";
import { CategoryProvider } from "../../context/CategoryContext";
// import CategoriesScreen from "../../components/mobileComponent/CategoriesScreen";

const Stack = createNativeStackNavigator();

// Main App with Stack Navigation
export default function LandingPageMobile() {
    return (
        <NavigationContainer>
            <CategoryProvider>
                <Stack.Navigator initialRouteName="Splash">
                    <Stack.Screen
                        name="Splash"
                        component={SplashScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Main"
                        component={MainScreenWithIcons}
                        options={{ headerShown: false }}
                    />
                    {/* <Stack.Screen
                   name="CustomOrderScreen"
                    component={CustomOrderScreen}
                    options={{ title: "Create Your Cake" }}
                /> */}
                    <Stack.Screen
                   name="CategoryScreenList"
                    component={CategoryPage}
                    options={
                        {
                            headerShown: false, // Disable the default header
                        }
                    }
                    // options={{ title: "Create Your Cake" }}

                />
                </Stack.Navigator>
            </CategoryProvider>
        </NavigationContainer>
    );
}
