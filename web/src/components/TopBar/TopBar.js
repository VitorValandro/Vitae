import React from 'react';
import { Link } from 'react-router-dom';
import { getUserId, getUserThatIsAuthenticated, isAuthenticated } from '../../services/auth';

import './TopBar.css'

function TopBar() {
  return (
    <div className="topbar-container">
      <div className="left-content">
        <Link to={'/'}>
          <img 
            src={process.env.PUBLIC_URL + "/icons/logo.png"} 
            alt="Go back" 
            width="80"
          />
        </Link>
      </div>
      
      <div className="right-content">
        {isAuthenticated()
          ? <Link to={`/usuario/${getUserId()}`} className="nav-btn">{getUserThatIsAuthenticated()}</Link>
          : <Link to={"/entrar"} className="nav-btn">Registre-se</Link>
        }
      </div>
    </div>
  );
}

export default TopBar;
