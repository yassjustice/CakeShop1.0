import React from "react";
import "../../css/cssWeb/HeroSection.css"; // Import the CSS file

const HeroSection = ({id}) => {
    return (
        <section id={id} className="hero-container">
            <div className="text-container">
                <h1 className="celebrate">Celebrate</h1>
                <h1 className="life">Life</h1>
                <h1 className="with">With</h1>
                <h1 className="every-bite">
                    <span className="every">Every </span>
                    <span className="bite">Bite!</span>
                </h1>
            </div>
            <div className="cta-button">
                <div className="rectangle">
                    <a href="#category" style={{ textDecoration: 'none' }}>
                    <span className="cta-text">Browse Cakes</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
