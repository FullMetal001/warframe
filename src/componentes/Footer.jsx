import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
         <div className="footer-content">
           <h3>Contact us for more information</h3>
           <div className="social-icons">
             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
               <FaFacebook size={40} color='white'/> 
             </a>
             <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
               <FaTwitter size={40} color='white' /> 
             </a>
             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
               <FaInstagram size={40} color='white' /> 
             </a>
             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
               <FaLinkedin size={40} color='white' /> 
             </a>
           </div>
         </div>
       </footer>
  )
}

export default Footer