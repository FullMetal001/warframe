import React, { useState } from 'react';

const Slider = () => {
    const images = [
        '/images/sl1.jpg',
        '/images/sl2.jpg',
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const [isTransitioning, setIsTransitioning] = useState(false);
    
      const nextImage = () => {
        setIsTransitioning(true); 
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          setIsTransitioning(false); 
        }, 300); 
      };
    
      const prevImage = () => {
        setIsTransitioning(true); 
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
          setIsTransitioning(false); 
        }, 300); 
      };

  return (
    <div className="slider">      
      <div className={`slider-image-container ${isTransitioning ? 'fade' : ''}`}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />
      </div>
      <div className='slider-button-container'>
        <button onClick={prevImage} className="slider-button">Prev</button>
        <button onClick={nextImage} className="slider-button">Next</button>
      </div>
    </div>
  )
}

export default Slider