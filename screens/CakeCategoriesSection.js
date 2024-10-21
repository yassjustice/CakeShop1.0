import React from 'react';
import { Asset } from 'expo-asset';
import '../css/CategorySection.css';

const categories = [
  { 
    name: 'Birthday Bliss', 
    image: Asset.fromModule(require('../assets/birthday-cake.jpg')).uri,
    description: "Celebrate your special day with our delicious Birthday Bliss cakes, crafted for a perfect party treat."
  },
  { 
    name: "Love's Sweet Finale", 
    image: Asset.fromModule(require('../assets/wedding-cake.jpg')).uri,
    description: "A beautiful wedding cake to crown your unforgettable day. Love's Sweet Finale, made with elegance and care."
  },
  { 
    name: 'Mini Indulgences', 
    image: Asset.fromModule(require('../assets/cupcakes.jpg')).uri,
    description: "Delight in our Mini Indulgences, the perfect little bites of sweetness for any occasion."
  },
  { 
    name: 'Cake for Every Celebration', 
    image: Asset.fromModule(require('../assets/special-occasion-cake.jpg')).uri,
    description: "Whatever the occasion, our Cake for Every Celebration will make it truly memorable with rich flavors."
  },
  { 
    name: 'Classic Elegance', 
    image: Asset.fromModule(require('../assets/category-5.jpg')).uri,
    description: "Timeless beauty and delicious taste come together in our Classic Elegance cakes."
  },
  { 
    name: 'Modern Marvels', 
    image: Asset.fromModule(require('../assets/category-6.jpg')).uri,
    description: "Step into the future of cake designs with our Modern Marvels, bold, innovative, and flavorful."
  },
];

const CategorySection = ({ id }) => {
  return (
    <div id={id} className="category-section">
      <div className="text-content">
        <h2 className="category-heading">Cake Categories</h2>
        <p className="category-subheading">Discover our wide range of delicious cakes</p>
      </div>
      <div className="category-cards">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="category-image-placeholder">
              <img src={category.image} alt={category.name} className="category-image" />
            </div>
            <div className="category-body">
              <h3 className="category-title">{category.name}</h3>
              <p className="category-description">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
