import React, { useState } from 'react';

import '../../global.css';
import './User.css';

import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/Footer/Footer';
import LeftBar from '../../components/LeftBar/LeftBar';
import { Education, Professional, Production, Project } from '../../components/UserSection/Section';
import { UserForm } from '../../components/ModalForm/ModalForm';

function User() {
  const [userModal, setUserModal] = useState(false);

  return (
    <>
      <TopBar />
      <div className="user-container">
        <LeftBar />
        <div className="user-content">
          <UserForm />
          <div className="user-header">
            <div className="user-header-left">
              <img src="https://github.com/V.png" alt="" />
              <div>
                <span className="user-info-subtitle"><b>Email: </b>vitormateusd@gmail.com</span><br />
                <span className="user-info-subtitle"><b>Telefone: </b>+55 (49) 998136787</span>
              </div>
            </div>
            <div className="user-header-right">
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
          <button onClick={() => setUserModal(!userModal)}>Modal</button>
          <hr />
          <div className="user-section-content">
            <span id="education" className="user-section-title">Educação Acadêmica</span>
            <Education />
            <Education />
            <Education />
            <Education />
          </div>
          <hr />
          <div className="user-section-content">
            <span id="professional" className="user-section-title">Experiência Profissional</span>
            <Professional />
            <Professional />
            <Professional />
            <Professional />
          </div>
          <hr />
          <div className="user-section-content">
            <span id="productions" className="user-section-title">Produções</span>
            <Production />
            <Production />
            <Production />
            <Production />
          </div>
          <hr />
          <div className="user-section-content">
            <span id="projects" className="user-section-title">Projetos</span>
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
          <hr />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default User;