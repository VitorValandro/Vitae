import React from 'react';
import { Link } from 'react-router-dom';

import './TopBar.css'

function TopBar() {
  return (
    <div className="topbar-container">
      <div className="left-content">
        <Link to={'/'}>
          <img 
            src={process.env.PUBLIC_URL + "/icons/arrow-left.svg"} 
            alt="Go back" 
            width="30"
          />
        </Link>
      </div>
      <div className="center-content">
        <img src={process.env.PUBLIC_URL + "/icons/logo.png"} alt="VITAE" width="40" />
      </div>
      <div className="right-content">
        <Link to={"/entrar"} className="nav-btn">Registre-se</Link>
      </div>
    </div>
  );
}

export default TopBar;
