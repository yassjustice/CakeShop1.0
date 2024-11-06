import React from 'react';
import { Asset } from 'expo-asset';
import Header from './Header';
import HeroSection from './HeroSection';
import CakeCategoriesSection from './CakeCategoriesSection';
import TestimonialSection from './TestimonialSection';
import Footer from './Footer';
import AboutUsSection from './AboutUsSection';


const LandingPageWeb = () => {
  const image = Asset.fromModule(require('../../assets/cake-hero.jpg')).uri; // Use Expo's Asset
  const imageAbout = Asset.fromModule(require('../../assets/aboutBackImage.jpeg')).uri; // Use Expo's Asset
  return (
    <div style={styles.page}>
      <Header />
      <HeroSection image={imageAbout} id="home"/>
      <AboutUsSection id="about" />
      <CakeCategoriesSection id="category" />
      <TestimonialSection id="testimony" />
      <Footer />
    </div>
  );
};

// Styles
const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f5f5f5',
    overflowY: 'auto',
    minWidth: '100%',
    minHeight: '100vh',
    flexDirection: 'column',
    overflowX: 'hidden',
  },
};

export default LandingPageWeb;
