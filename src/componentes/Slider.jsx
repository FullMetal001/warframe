import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Slider = () => {
  const navigate = useNavigate(); 
  const navigateToWarframeTable = () => {
    navigate('/warframes'); 
  };

      const images = [
        'https://static.wikia.nocookie.net/warframe/images/4/41/ExcaliburFull.png',
        'https://static.wikia.nocookie.net/warframe/images/6/6c/MagFull.png',
        'https://static.wikia.nocookie.net/warframe/images/1/1d/RevenantFull.png',
      ];
    
      const preloadImages = (imageArray) => {
        imageArray.forEach((image) => {
          const img = new Image();
          img.src = image; 
        });
      };    
      useEffect(() => {
        preloadImages(images); 
      }, []);

      const [currentIndex, setCurrentIndex] = useState(0);
      const [isTransitioning, setIsTransitioning] = useState(false);
    
      const nextImage = () => {
        if (isTransitioning) return;
        setIsTransitioning(true); 
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);          
        }, 350); 
        setTimeout(() => {          
          setIsTransitioning(false); 
        }, 600); 
      };
    
      const prevImage = () => {
        if (isTransitioning) return;
        setIsTransitioning(true); 
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);          
        }, 350); 
        setTimeout(() => {          
          setIsTransitioning(false); 
        }, 600); 
      };

  return (
    <div className="slider"> 
      <div className='slider-text' onClick={navigateToWarframeTable}>
        <h2>WARFRAMES</h2>  
      </div>     
      <div className={`slider-image-container ${isTransitioning ? 'fade' : ''}`}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />
      </div>
      <div className='slider-button-container'>
        <button onClick={prevImage} className="slider-button">Prev</button>
        <button onClick={nextImage} className="slider-button">Next</button>
      </div>
      <div className='slider-text2'>
        <h2>PRIMARY WEAPONS</h2>  
      </div>     
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