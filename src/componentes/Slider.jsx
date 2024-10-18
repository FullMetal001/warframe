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

  const navigateToSecondaryWeapons = () => {
    navigate('/secondaryweapons'); 
  };

  const navigateToMeleeW = () => {
    navigate('/melee'); 
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
      const images3 = [
        'https://static.wikia.nocookie.net/warframe/images/6/60/RaktaBallistica.png',
        'https://static.wikia.nocookie.net/warframe/images/a/a7/Hystrix.png',
        'https://static.wikia.nocookie.net/warframe/images/2/2a/Grimoire.png',
      ];  
      const images4 = [
        'https://static.wikia.nocookie.net/warframe/images/7/7d/Nepheri.png',
        'https://static.wikia.nocookie.net/warframe/images/d/d8/Falcor.png',
        'https://static.wikia.nocookie.net/warframe/images/5/5b/DualKamasPrime.png',
      ];  
      

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
      /* Secondary Weapons */
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

      const [currentIndex3, setCurrentIndex3] = useState(0); /* Secondary Weapons */
      const [isTransitioning3, setIsTransitioning3] = useState(false); /* Secondary Weapons */


      /* Secondary Weapons */ 
      const nextImage3 = () => {
        if (isTransitioning3) return;
        setIsTransitioning3(true); 
        setTimeout(() => {
          setCurrentIndex3((prevIndex3) => (prevIndex3 + 1) % images3.length);          
        }, 350); 
        setTimeout(() => {          
          setIsTransitioning3(false); 
        }, 600); 
      };      
      /* Secondary Weapons */
      const prevImage3 = () => {
        if (isTransitioning3) return;
        setIsTransitioning3(true); 
        setTimeout(() => {
          setCurrentIndex3((prevIndex3) => (prevIndex3 - 1 + images3.length) % images3.length);          
        }, 350); 
        setTimeout(() => {          
          setIsTransitioning3(false); 
        }, 600); 
      };

      const [currentIndex4, setCurrentIndex4] = useState(0); /* Melee */
      const [isTransitioning4, setIsTransitioning4] = useState(false); /* Melee */


      /* Melee */ 
      const nextImage4 = () => {
        if (isTransitioning4) return;
        setIsTransitioning4(true); 
        setTimeout(() => {
          setCurrentIndex4((prevIndex4) => (prevIndex4 + 1) % images4.length);          
        }, 350); 
        setTimeout(() => {          
          setIsTransitioning4(false); 
        }, 600); 
      };      
      /* Melee */
      const prevImage4 = () => {
        if (isTransitioning4) return;
        setIsTransitioning4(true); 
        setTimeout(() => {
          setCurrentIndex4((prevIndex4) => (prevIndex4 - 1 + images4.length) % images4.length);          
        }, 350); 
        setTimeout(() => {          
          setIsTransitioning4(false); 
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
      <div className='slider-text2' onClick={navigateToSecondaryWeapons}>
        <h2>SECONDARY WEAPONS</h2>  
      </div>     
      <div className={`slider-imagew-container ${isTransitioning3 ? 'fade' : ''}`}>
        <img src={images3[currentIndex3]} alt={`Slide ${currentIndex3}`} className="slider-image" />
      </div>
      <div className='slider-button-container'>
        <button onClick={prevImage3} className="slider-button">Prev</button>
        <button onClick={nextImage3} className="slider-button">Next</button>
      </div>
      <div className='slider-text2' onClick={navigateToMeleeW}>
        <h2>MELEE</h2>  
      </div>     
      <div className={`slider-imagew-container ${isTransitioning4 ? 'fade' : ''}`}>
        <img src={images4[currentIndex4]} alt={`Slide ${currentIndex4}`} className="slider-image" />
      </div>
      <div className='slider-button-container'>
        <button onClick={prevImage4} className="slider-button">Prev</button>
        <button onClick={nextImage4} className="slider-button">Next</button>
      </div>
    </div>
  )
}

export default Slider