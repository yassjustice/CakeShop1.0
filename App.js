import React from 'react';
import { Platform } from 'react-native';
import LandingPageMobile from './screens/LandingPageMobile';
import LandingPageWeb from './screens/LandingPageWeb';

export default function App() {
  return Platform.OS === 'web' ? <LandingPageWeb /> : <LandingPageMobile />;
}
