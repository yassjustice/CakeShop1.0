import React from "react";
import { Asset } from "expo-asset";
import "../../css/cssWeb/footerStyles.css";

const Footer = ({id}) => {
    const cakeImage = Asset.fromModule(
        require("../../assets/ElegantCakeLogo.png")
    ).uri;
    const phoneIm = Asset.fromModule(require("../../assets/Phone.png")).uri;
    const twitterIm = Asset.fromModule(require("../../assets/Twitter.png")).uri;
    const clockIm = Asset.fromModule(require("../../assets/Clock.png")).uri;

    return (
        <footer id={id} className="footer">
            <div className="footer_rectangle">
                <div className="footer-top">
                    <div className="footer-item">
                        <img
                            src={phoneIm}
                            className="footerImage"
                            alt=" placeholder image"
                        />
                        <span className="footerSpanTop">Contact Us</span>
                    </div>
                    <div className="footer-item">
                        <img
                            src={twitterIm}
                            className="footerImage"
                            alt=" placeholder image"
                        />
                        <span>Our Socials</span>
                    </div>
                    <div className="footer-item">
                        <img
                            src={clockIm}
                            className="footerImage"
                            alt=" placeholder image"
                        />
                        <span>Shop Hours</span>
                    </div>
                </div>
                <div className="footer-grid">
                    <div className="footer-section">
                        <h3>Address</h3>
                        <p>
                            Sweet Delights Bakery 123 Sugar Lane, Blossomville,
                            CA 90210, United States
                        </p>
                    </div>
                    <div className="footer-section logo-section">
                        <img src={cakeImage} alt="Cake Shop Logo" />
                        <p>
                            Handcrafted cakes for every occasion, made with
                            fresh ingredients and creative designs.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3>Links</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Categories</li>
                            <li>Partnerships</li>
                            <li>Socials</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
