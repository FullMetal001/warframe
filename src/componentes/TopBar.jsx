import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isTextVisible, setIsTextVisible] = useState(false);
  const timeoutRef = useRef(null);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen); 
    if (!isMenuOpen) {      
      timeoutRef.current = setTimeout(() => {
        setIsTextVisible(true);
      }, 500);
    } else {      
      setIsTextVisible(false);
      clearTimeout(timeoutRef.current);
    }
  };

  const changeUrl = (a) => {
    setIsMenuOpen(false); 
    setIsTextVisible(false);
    navigate(a);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 830) {
        setIsMenuOpen(false); 
        setIsTextVisible(false);
      }
    };

    window.addEventListener('resize', handleResize); 
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  return (
    <div className={`top-container ${isMenuOpen ? 'padding-expanded' : ''}`}>
      <div className='top-logo'>
        <img src='/images/logo-icon.png' alt='Icono' />
      </div>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" checked={isMenuOpen} 
        onChange={handleToggle} />
      <label htmlFor="menu-toggle" className="menu-icon">
        <img src='/images/menu.png' alt='Menú' /> 
      </label>
      <nav className={`top-menu ${isTextVisible ? 'open' : ''}`}>    
        <ul>
          <li><a href="/">Home</a></li>
          <li><a onClick={() => changeUrl('/warframes')}>Warframes</a></li>
          <li><a href="/">Primary Weapons</a></li>
          <li><a href="/">Secondary Weapons</a></li>
          <li><a href="/">Melee</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default TopBar;