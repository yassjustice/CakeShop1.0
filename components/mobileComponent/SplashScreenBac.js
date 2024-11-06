import React, { useEffect } from "react";
import {
    View,
    Text,
    ImageBackground,
} from "react-native";
import cakeBig from "../../assets/cakeBig.jpeg";
import '../../css/cssMobile/splashScreenStyle.css'; // Import CSS directly

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        // setTimeout(() => {
        //   navigation.replace('Main');  // Navigates to the Home after 3 seconds
        // }, 3000);
    }, []);

    return (
        <ImageBackground
            source={cakeBig}
            style={{ width: '100%', height: 'auto' }} // Adjusted ImageBackground styling
        >
            <View>
                <View style={{ position: 'absolute', width: 153, height: 296, left: 0, top: 74 }}>
                    <Text style={{ fontFamily: 'Playfair Display', fontWeight: '700', fontSize: 25, lineHeight: 63, color: '#FFFFFF', position: 'absolute', top: 0, left: 2 }}>Celebrate</Text>
                    <Text style={{ fontFamily: 'Playfair Display', fontWeight: '700', fontSize: 25, lineHeight: 63, color: '#FFFFFF', position: 'absolute', top: 54, left: 46 }}>Life</Text>
                    <Text style={{ fontFamily: 'Playfair Display', fontWeight: '700', fontSize: 25, lineHeight: 63, color: '#FFFFFF', position: 'absolute', top: 116, left: 26 }}>With</Text>
                    <Text style={{ fontFamily: 'Playfair Display', fontWeight: '700', fontSize: 25, lineHeight: 63, color: '#FFFFFF', position: 'absolute', top: 172, left: 16 }}>Every</Text>
                    <Text style={{ fontFamily: 'Playfair Display', fontWeight: '700', fontSize: 25, lineHeight: 63, color: '#FFFFFF', position: 'absolute', top: 234, left: 10 }}>Bite</Text>
                </View>
            </View>
        </ImageBackground>
    );
}
