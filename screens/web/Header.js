import { Asset } from "expo-asset";
import React from "react";
import { Image, View, Text } from "react-native";

// Make sure to import the image directly
// const logoImage = require('../assets/ElegantCakeLogo.png');

const Header = () => {
    const logoImage = Asset.fromModule(
        require("../../assets/cakeLogo.png")
    ).uri;
    return (
        <header style={styles.headerContainer}>
            {/* Use Image component from React Native */}
            <a href="/" style={{ textDecoration: "none" }}>
                <img src={logoImage} style={styles.logo} alt="Cake Shop Logo" />
            </a>

            <nav style={styles.navContainer}>
                <a href="#home" style={styles.navItem}>
                    Home
                </a>
                <a href="#testimony" style={styles.navItem}>
                    Contact Us
                </a>
                <a href="#about" style={styles.navItem}>
                    About Us
                </a>
            </nav>

            <div style={styles.ctaContainer}>
                <div style={styles.rectangle}>
                    <a href="#category" style={{ textDecoration: "none" }}>
                        <span style={styles.ctaText}>Categories</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

// Styles
const styles = {
    headerContainer: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        display: "grid",
        gridTemplateColumns: "auto auto max-content",
        alignItems: "center",
    },
    logo: {
        gridColumn: "1 / 2",
        width: 100, // Adjust as needed
        height: "auto",
        marginLeft: "20px",
    },
    navContainer: {
        gridColumn: "2 / 3",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
    },
    navItem: {
        fontFamily: "Playfair Display",
        fontSize: "20px", // Set font size to 20
        color: "black",
        marginLeft: "30px",
        textDecoration: "none",
    },
    ctaContainer: {
        gridColumn: "3 / 4",
        display: "flex",
        justifyContent: "flex-end",
        margin: "30px",
        alignItems: "center",
    },
    rectangle: {
        width: "150px",
        height: "50px",
        border: "2px solid black",
        borderRadius: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    ctaText: {
        fontFamily: "Playfair Display",
        fontWeight: 700,
        fontSize: "20px", // Set font size to 20
        color: "black",
    },
};

export default Header;
