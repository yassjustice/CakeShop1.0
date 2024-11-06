import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import screens
import SplashScreen from "../../components/mobileComponent/SplashScreen";

import MainScreenWithIcons from "../../components/mobileComponent/MainScreenWithIcons";

const Stack = createNativeStackNavigator();




// Main App with Stack Navigation
export default function LandingPageMobile() {
    return (
        <NavigationContainer>
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}
