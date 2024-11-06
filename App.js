import React, { useEffect, useState } from 'react';
import { Platform, Text } from 'react-native';
import LandingPageWeb from './screens/web/LandingPageWeb';
import LandingPageMobile from './screens/mobile/LandingPageMobile';
import * as Font from 'expo-font';  // Import expo-font
import * as SplashScreen1 from 'expo-splash-screen';




export default function App() {




  return Platform.OS === 'web' ? <LandingPageWeb /> : <LandingPageMobile />;
}
