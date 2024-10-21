import React from "react";
import "../css/AboutUsSection.css"; // Import the CSS file

const AboutUsSection = ({id}) => {
    return (
        <div id={id} className="about-us-section">
            <h1 className="about-us-title">About Us</h1>
            <div className="rectangleAbout">
            <p className="about-us-text">
                At Cake Shop, we create handcrafted cakes, cupcakes, and cookies for every special occasion. With quality ingredients and custom designs, we make your celebrations sweeter and more memorable.
            </p>
            </div>
           
        </div>
    );
};

export default AboutUsSection;
