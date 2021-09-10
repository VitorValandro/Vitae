import React from 'react';


import './TopBar.css'

function TopBar() {
  return (
    <div className="topbar-container">
      <div className="left-content">
        <img src={process.env.PUBLIC_URL + "/icons/arrow-left.svg"} alt="Go back" width="30"/>
      </div>
      <div className="center-content">
        <img src={process.env.PUBLIC_URL + "/icons/logo.png"} alt="VITAE" width="40" />
      </div>
      <div className="right-content">
        <div className="nav-btn">Registre-se</div>
      </div>
    </div>
  );
}

export default TopBar;
