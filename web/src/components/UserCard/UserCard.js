import React from 'react';

import './UserCard.css'

function UserCard() {
  return (
    <div className="user-info-container">
      <div className="user-info-left">
        <img
          className="user-info-image"
          src="https://github.com/V.png"
          alt="foto do usuário"
        />
      </div>
      <div className="user-info-right">
        <span className="user-info-title">Vitor Matheus Valandro da Rosa</span>
        <span className="user-info-subtitle">Professor Doutor Alcione Talaska</span>
        <span className="user-info-description">
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
