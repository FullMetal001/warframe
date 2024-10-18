import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Slider = () => {
  const navigate = useNavigate(); 
  const navigateToWarframeTable = () => {
    navigate('/warframes'); 
  };

  const navigateToPrimaryWeapons = () => {
    navigate('/primaryweapons'); 
  };

      const images = [
        'https://static.wikia.nocookie.net/warframe/images/4/41/ExcaliburFull.png',
        'https://static.wikia.nocookie.net/warframe/images/6/6c/MagFull.png',
        'https://static.wikia.nocookie.net/warframe/images/1/1d/RevenantFull.png',
      ];
      const images2 = [
        'https://static.wikia.nocookie.net/warframe/images/7/72/Bubonico.png',
        'https://static.wikia.nocookie.net/warframe/images/b/bf/Simulor.png',
        'https://static.wikia.nocookie.net/warframe/images/1/1c/Felarx.png',
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

      const [currentIndex, setCurrentIndex] = useState(0); /* Warframes */
      const [isTransitioning, setIsTransitioning] = useState(false); /* Warframe */
    
      /* Warframes */ 
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
      /* Warframes */
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

      const [currentIndex2, setCurrentIndex2] = useState(0); /* Primary Weapons */
      const [isTransitioning2, setIsTransitioning2] = useState(false); /* Primary Weapons */


      /* Primary Weapons */ 
      const nextImage2 = () => {
        if (isTransitioning2) return;
        setIsTransitioning2(true); 
        setTimeout(() => {
          setCurrentIndex2((prevIndex2) => (prevIndex2 + 1) % images2.length);          
        }, 350); 
        setTimeout(() => {          
          setIsTransitioning2(false); 
        }, 600); 
      };      
      /* Primary Weapons */
      const prevImage2 = () => {
        if (isTransitioning2) return;
        setIsTransitioning2(true); 
        setTimeout(() => {
          setCurrentIndex2((prevIndex2) => (prevIndex2 - 1 + images2.length) % images2.length);          
        }, 350); 
        setTimeout(() => {          
          setIsTransitioning2(false); 
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
      <div className='slider-text2' onClick={navigateToPrimaryWeapons}>
        <h2>PRIMARY WEAPONS</h2>  
      </div>     
      <div className={`slider-imagew-container ${isTransitioning2 ? 'fade' : ''}`}>
        <img src={images2[currentIndex2]} alt={`Slide ${currentIndex2}`} className="slider-image" />
      </div>
      <div className='slider-button-container'>
        <button onClick={prevImage2} className="slider-button">Prev</button>
        <button onClick={nextImage2} className="slider-button">Next</button>
      </div>
    </div>
  )
}

export default Slider