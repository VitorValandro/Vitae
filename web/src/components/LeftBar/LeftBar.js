import React from 'react';

import '../../global.css';
import './LeftBar.css'

function LeftBar() {
  return (
    <div className="leftbar-container">
      <div className="leftbar-content">
        <a href="#education">
          <li className="leftbar-item">
            Educação
          </li>
        </a>
        <a href="#professional">
          <li className="leftbar-item">
            Experiência Profissional
          </li>
        </a>
        <a href="#projects">
          <li className="leftbar-item">
            Projetos
          </li>
        </a>
        <a href="#productions">
          <li className="leftbar-item">
            Produções
          </li>
        </a>
      </div>
    </div>
  );
}

export default LeftBar;
