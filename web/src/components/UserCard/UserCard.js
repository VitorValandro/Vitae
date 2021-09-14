import React, { useState, useEffect } from 'react';

import './UserCard.css'

function UserCard() {
  const [width, setWidth] = useState(window.innerWidth);
  const widthBreakpoint = 900;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // remove o eventListener para poupar memória
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    width < widthBreakpoint ? <UserCardMobile /> : <UserCardDesktop />
  );
}

function UserCardDesktop() {
  return (
    <div className="usercard-info-container">
      <div className="usercard-info-left">
        <img
          className="usercard-info-image"
          src="https://github.com/V.png"
          alt="foto do usuário"
        />
      </div>
      <div className="usercard-info-right">
        <div className="usercard-info-header">
          <div>
            <span className="usercard-info-title">Vitor Matheus Valandro da Rosa</span>
            <span className="usercard-info-subtitle">Professor Doutor Alcione Talaska</span>
          </div>
          <span className="usercard-info-link">Perfil completo</span>
        </div>
        <span className="usercard-info-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.
        </span>
      </div>
    </div>
  );
}

function UserCardMobile(){
  return (
    <div className="usercard-info-container">
      <div className="usercard-info-right">
        <div className="usercard-info-header">
          <img
            className="usercard-info-image"
            src="https://github.com/V.png"
            alt="foto do usuário"
          />
          <div>
            <span className="usercard-info-title">Vitor Matheus Valandro da Rosa</span>
            <span className="usercard-info-subtitle">Professor Doutor Alcione Talaska</span>
          </div>
        </div>
        <span className="usercard-info-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.
        </span>
      </div>
    </div>
  );
}

export default UserCard;
