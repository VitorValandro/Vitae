import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { STATIC_FOLDER } from '../../services/api';
import './UserCard.css'

function UserCard({ data }) {
  const [width, setWidth] = useState(window.innerWidth);
  const widthBreakpoint = 900;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // remove o eventListener para poupar memória
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    width < widthBreakpoint ? <UserCardMobile data={data} /> : <UserCardDesktop data={data} />
  );
}

function UserCardDesktop({ data }) {
  return (
    <div className="usercard-info-container" key={data.id}>
      <div className="usercard-info-left">
        <img
          className="usercard-info-image"
          src={`${STATIC_FOLDER}/${data.photoURL}`}
          alt="foto do usuário"
        />
      </div>
      <div className="usercard-info-right">
        <div className="usercard-info-header">
          <div>
            <Link to={`usuario/${data.id}`}>
              <span className="usercard-info-title">{data.username}</span>
            </Link>
            <span className="usercard-info-subtitle">{data.subtitle}</span>
          </div>
          <Link to={`usuario/${data.id}`}>
            <span className="usercard-info-link">Perfil completo</span>
          </Link>
        </div>
        <span className="usercard-info-description">
          {data.abstract}
        </span>
      </div>
    </div>
  );
}

function UserCardMobile({ data }){
  return (
    <div className="usercard-info-container">
      <div className="usercard-info-right">
        <div className="usercard-info-header">
          <img
            className="usercard-info-image"
            src={`${STATIC_FOLDER}/${data.photoURL}`}
            alt="foto do usuário"
          />
          <div>
            <Link to={`usuario/${data.id}`}>
              <span className="usercard-info-title">{data.username}</span>
            </Link>
            <span className="usercard-info-subtitle">{data.subtitle}</span>
          </div>
        </div>
        <span className="usercard-info-description">
          {data.abstract}
        </span>
      </div>
    </div>
  );
}

export default UserCard;
