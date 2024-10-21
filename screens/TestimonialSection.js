import React from 'react';
import '../css/TestimonialSection.css';
import { Asset } from 'expo-asset';

const TestimonialSection = ({id}) => {
  const heart1 = Asset.fromModule(require('../assets/Vector.png')).uri;
  const heart2 = Asset.fromModule(require('../assets/Vector-1.png')).uri;
  const heart3 = Asset.fromModule(require('../assets/Vector-2.png')).uri;
  const heart4 = Asset.fromModule(require('../assets/Vector-3.png')).uri;
  
  return(
  <section id={id} className="testimonial-section">
    <div className="testimonial-background"></div>
    <div className="testimonial-rectangle">
      <blockquote className="testimonial-quote">
        <cite className="testimonial-author">— Sarah L.</cite>
        <p className="quote-text">"The wedding cake was perfect—beautifully designed and absolutely delicious! Our guests loved it, and it made our day so special."</p>
      </blockquote>
      <div className="final-cadre">
        <div className="ellipse-photo"></div>
      </div>
    </div>
    <div className="testimonial_Pink"></div>
    <img src={heart1} className="heart1" alt="heart1"/>
    <img src={heart2} className="heart2" alt="heart2"/>
    <img src={heart3} className="heart3" alt="heart3"/>
    <img src={heart4} className="heart4" alt="heart4"/>
  </section>
);
}

export default TestimonialSection;
