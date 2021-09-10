import React from 'react';

import './Footer.css'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <div className="footer-container">
      <div className="footer-left">
        <span className="footer-title">VITAE</span>
        <span className="footer-info">Instituto Federal Catarinense</span>
        <span className="footer-info">Informática para Internet</span>
        <span className="footer-info">Desenvolvimento Web III</span>
      </div>
      <div className="footer-right">
        <img 
          className="footer-icon" 
          src={process.env.PUBLIC_URL + "/icons/github.svg"}  
          alt="Go up" 
        />
        <img 
          className="footer-icon" 
          src={process.env.PUBLIC_URL + "/icons/arrow-up.svg"} 
          alt="Repositório do projeto" 
          onClick={scrollToTop}
        />
      </div>
    </div>
  );
}

export default Footer;
