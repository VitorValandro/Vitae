import React from 'react';

import '../../global.css';
import './LeftBar.css'

function LeftBar() {
  return (
    <div className="leftbar-container">
      <div className="leftbar-content">
        <li className="leftbar-item">
          Educação
        </li>
        <li className="leftbar-item">
          Experiência profissional
        </li>
        <li className="leftbar-item">
          Projetos
        </li>
        <li className="leftbar-item">
          Produções
        </li>
      </div>
    </div>
  );
}

export default LeftBar;
