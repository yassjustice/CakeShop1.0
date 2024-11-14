import React, { useEffect, useState } from 'react';
import { Platform, Text } from 'react-native';
import LandingPageWeb from './screens/web/LandingPageWeb';
import LandingPageMobile from './screens/mobile/LandingPageMobile';
import * as Font from 'expo-font';  // Import expo-font
import * as SplashScreen1 from 'expo-splash-screen';
import { TailwindProvider } from 'tailwindcss-react-native';




export default function App() {




  return (
    <TailwindProvider>
      {Platform.OS === 'web' ? <LandingPageWeb /> : <LandingPageMobile />}
    </TailwindProvider>
  );
}
