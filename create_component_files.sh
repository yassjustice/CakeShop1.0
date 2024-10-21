#!/bin/bash

# Root directories for the project
screens_dir="./CakeShopApp1/screens"

# Create screens directory if it doesn't exist
mkdir -p $screens_dir

# Create component files
declare -A components=(
    ["Header.js"]="
import React from 'react';

const Header = () => (
  <header style={styles.header}>
    <h1 style={styles.logo}>Cake Shop</h1>
    <nav style={styles.nav}>
      <a href='#home'>Home</a>
      <a href='#contact'>Contact Us</a>
      <a href='#about'>About Us</a>
    </nav>
  </header>
);

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#ff9f43',
  },
  logo: {
    fontSize: '1.5em',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
};

export default Header;
"
    ["HeroSection.js"]="
import React from 'react';

const HeroSection = ({ image }) => (
  <section style={styles.heroSection}>
    <h2>Celebrate Life With Every Bite!</h2>
    <p>Cake Shop</p>
    <button style={styles.ctaButton}>Browse Cakes</button>
    <img src={image} style={styles.heroImage} alt='Hero cake' />
  </section>
);

const styles = {
  heroSection: {
    textAlign: 'center',
    padding: '20px',
  },
  heroImage: {
    width: '80%',
    height: 'auto',
    marginTop: '20px',
  },
  ctaButton: {
    padding: '10px 20px',
    backgroundColor: '#ff9f43',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    margin: '10px',
  },
};

export default HeroSection;
"
    ["AboutUsSection.js"]="
import React from 'react';

const AboutUsSection = () => (
  <section style={styles.aboutSection}>
    <h2>About Us</h2>
    <p>At Cake Shop, we create handcrafted cakes, cupcakes, and cookies for every special occasion.</p>
    <p>With quality ingredients and custom designs, we make your celebrations sweeter and more memorable.</p>
  </section>
);

const styles = {
  aboutSection: {
    padding: '20px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
};

export default AboutUsSection;
"
    ["CakeCategoriesSection.js"]="
import React from 'react';

const CakeCategoriesSection = () => (
  <section style={styles.cakeCategories}>
    <h2>Cake Categories</h2>
    <p>Explore Our Delicious Cake Selection</p>
    {/* Placeholder for cake categories */}
  </section>
);

const styles = {
  cakeCategories: {
    padding: '20px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
};

export default CakeCategoriesSection;
"
    ["TestimonialSection.js"]="
import React from 'react';

const TestimonialSection = () => (
  <section style={styles.testimonial}>
    <blockquote>
      <p>\"The wedding cake was perfect - beautifully designed and absolutely delicious!\"</p>
      <cite>- Sarah L.</cite>
    </blockquote>
  </section>
);

const styles = {
  testimonial: {
    padding: '20px',
    fontStyle: 'italic',
    backgroundColor: '#ffeadb',
    textAlign: 'center',
  },
};

export default TestimonialSection;
"
    ["Footer.js"]="
import React from 'react';

const Footer = () => (
  <footer style={styles.footer}>
    <h3>Contact Us</h3>
    <p>Sweet Delights Bakery, 123 Sugar Lane, Blossomville, CA 90210, United States</p>
    <nav>
      <a href='#about'>About Us</a>
      <a href='#contact'>Contact Us</a>
      <a href='#categories'>Categories</a>
      <a href='#partnerships'>Partnerships</a>
      <a href='#socials'>Socials</a>
    </nav>
    <p>&copy; Cake Shop - Handcrafted cakes for every occasion.</p>
  </footer>
);

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#ff9f43',
    textAlign: 'center',
    color: '#fff',
  },
};

export default Footer;
"
)

# Iterate through each component and create the file
for component in "${!components[@]}"; do
  echo "${components[$component]}" > "$screens_dir/$component"
  echo "Created $component"
done

echo "All component files have been created!"
