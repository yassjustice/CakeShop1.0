import { StyleSheet, Dimensions } from "react-native";



const { width } = Dimensions.get("window");
const aspectRatio = 450 / 645; // The aspect ratio from the original Figma settings
const dynamicHeight = width / aspectRatio;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: width, // Full screen width
        height: dynamicHeight, // Dynamically calculated height
        backgroundColor: 'white',
    },
    overlay: {
        position: 'absolute',
        width: 427.21,
        height: 645,
        left: 0,
        bottom: 287,
        backgroundColor: 'transparent',
        background: 'linear-gradient(180deg, rgba(24, 24, 25, 0) 53.64%, rgba(255, 255, 255, 0.3) 81.64%)',
    },
    gradientOverlay: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    heroTextContainer: {
        position: 'absolute',
        width: 153,
        height: 296,
        left: 0,
        top: 74,
    },
    celebrate: {
        position: 'absolute',
        width: 153,
        height: 62,
        left: 2,
        top: -50,
        fontFamily: 'PlayfairDisplay-Regular', // Ensure it's consistent
        fontStyle: 'normal',
        // fontWeight: '700',
        fontSize: 31,
        // lineHeight: 63,
        color: '#FFFFFF',
    },
    life: {
        position: 'absolute',
        width: 71,
        height: 62,
        left: 26,
        top: 0,
        fontFamily: 'PlayfairDisplay-Regular', // Ensure it's consistent
        fontStyle: 'normal',
        // fontWeight: '700',
        fontSize: 35,
        lineHeight: 63,
        color: '#FFFFFF',
    },
    with: {
        position: 'absolute',
        width: 71,
        height: 62,
        left: 26,
        top: 60,
        fontFamily: 'PlayfairDisplay-Regular',
        fontStyle: 'normal',
        // fontWeight: '700',
        fontSize: 31,
        lineHeight: 63,
        color: '#FFFFFF',
    },
    every: {
        position: 'absolute',
        width: 116,
        height: 62,
        left: 16,
        top: 115,
        fontFamily: 'PlayfairDisplay-Regular',
        fontStyle: 'normal',
        // fontWeight: '700',
        fontSize: 31,
        lineHeight: 63,
        color: '#FFFFFF',
    },
    bite: {
        position: 'absolute',
        width: 73,
        height: 62,
        left: 5,
        top: 180,
        fontFamily: 'PlayfairDisplay-Regular',
        fontStyle: 'normal',
        // fontWeight: '700',
        fontSize: 30,
        // lineHeight: 63,
        color: '#FFFFFF',
    },
        // New description container and text styles
        descriptionContainer: {
            position: 'absolute',
            flexDirection: 'column',
            alignItems: 'center',
            width: 425.1,
            height: 98.6,
            left: -29,
            top: 540,
        },
        descriptionHeader: {
            width: 425.1,
            // fontFamily: 'PlayfairDisplay-Regular',
            fontFamily: 'PlayfairDisplay-Bold',
            fontSize: 26,
            lineHeight: 35,
            textAlign: 'center',
            color: '#1A1D26',
        },
        descriptionText: {
            width: 325.1,
            fontFamily: 'PlayfairDisplay-Regular',
            fontSize: 18.2,
            lineHeight: 24,
            textAlign: 'center',
            color: '#4A4E4D',
            marginTop: 15.6,
        },
        ctaButton: {
            position: 'absolute',
            width: 220, // Smaller width
            height: 60, // Smaller height
            left: 120,
            top: 355,
            margin: 0,
            padding: 0,
            zIndex: 1,
        },
        buttonGradient: {
            position: 'absolute',
            width: 215, // Adjusted to fit within `ctaButton`
            height: 55, // Adjusted to fit within `ctaButton`
            left: 2,
            top: 3,
            borderRadius: 45, // Updated to better match the new button size
            borderColor: '#FFFFFF',
            borderWidth: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonText: {
            fontFamily: 'PlayfairDisplay-Regular',
            fontSize: 27,
            color: '#FFFFFF',
            textAlign: 'center',
            paddingBottom: 5,
        },
    
});

export default styles;
