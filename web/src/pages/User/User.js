import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import '../../global.css';
import './User.css';

import { getUserThatIsAuthenticated, isAuthenticated } from '../../services/auth';
import api from '../../services/api';


import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/Footer/Footer';
import LeftBar from '../../components/LeftBar/LeftBar';
import { Education, Professional, Production, Project } from '../../components/UserSection/Section';

import UserForm from '../../components/ModalForm/UserForm';
import EducationForm from '../../components/ModalForm/EducationForm';
import ProfessionalForm from '../../components/ModalForm/ProfessionalForm';
import ProductionForm from '../../components/ModalForm/ProductionForm';
import ProjectForm from '../../components/ModalForm/ProjectForm';

function User() {
  const [userInfo, setUserInfo] = useState({});
  const [userFormModal, setUserFormModal] = useState(false);
  const [educationFormModal, setEducationFormModal] = useState(false);
  const [professionalFormModal, setProfessionalFormModal] = useState(false);
  const [productionFormModal, setProductionFormModal] = useState(false);
  const [projectFormModal, setProjectFormModal] = useState(false);

  const { userId } = useParams();

  useEffect(() => getUserInfo(), []);

  async function getUserInfo(){
    await api.get(`/user/${userId}`)
      .then((response) => {
        setUserInfo(response.data);
        console.log(response.data);
      })
  }

  return (
    <>
      <TopBar />
      <div className="user-container">
        <LeftBar />
        <div className="user-content">
          <div className="user-header">
            <div className="user-header-left">
              <img src="https://github.com/V.png" alt="" />
              <div>
                <span className="user-info-subtitle"><b>Email: </b>{userInfo.email}</span><br />
                <span className="user-info-subtitle"><b>Telefone: </b>{userInfo.phone}</span>
              </div>
            </div>
            <div className="user-header-right">
              <span className="user-info-title">{userInfo.username}</span>
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
          <div className="user-info-button">
            {(isAuthenticated() && userInfo.username === getUserThatIsAuthenticated()) && (
              <button
                className="change-info-button"
                onClick={() => setUserFormModal(!userFormModal)}
              >
                Atualizar informações
              </button>
            )}
          </div>
          <hr />
          <div className="user-section-content">
            <div className="user-section-header">
              <span id="education" className="user-section-title">Educação Acadêmica</span>
              {(isAuthenticated() && userInfo.username === getUserThatIsAuthenticated()) && (
                <button
                  className="change-info-button"
                  onClick={() => setEducationFormModal(!educationFormModal)}
                >
                  Adicionar
                </button>
              )}
            </div>
            {
              userInfo.education && userInfo.education.length !== 0
                ? userInfo.education.map(section =>(<Education data={section} />))
                : (<span className="user-section-null">Não há nenhuma informação aqui</span>)
            }
          </div>
          <hr />
          <div className="user-section-content">
            <div className="user-section-header">
              <span id="professional" className="user-section-title">Experiência Profissional</span>
              {(isAuthenticated() && userInfo.username === getUserThatIsAuthenticated()) && (
                <button
                  className="change-info-button"
                  onClick={() => setProfessionalFormModal(!professionalFormModal)}
                >
                  Adicionar
                </button>
              )}
            </div>
            {
              userInfo.professional && userInfo.professional.length !== 0
                ? userInfo.professional.map(section => (<Professional data={section} />))
                : (<span className="user-section-null">Não há nenhuma informação aqui</span>)
            }
          </div>
          <hr />
          <div className="user-section-content">
            <div className="user-section-header">
              <span id="productions" className="user-section-title">Produções</span>
              {(isAuthenticated() && userInfo.username === getUserThatIsAuthenticated()) && (
                <button
                  className="change-info-button"
                  onClick={() => setProductionFormModal(!productionFormModal)}
                >
                  Adicionar
                </button>
              )}
            </div>
            {
              userInfo.production && userInfo.production.length !== 0
                ? userInfo.production.map(section => (<Production data={section} />))
                : (<span className="user-section-null">Não há nenhuma informação aqui</span>)
            }
          </div>
          <hr />
          <div className="user-section-content">
            <div className="user-section-header">
              <span id="projects" className="user-section-title">Projetos</span>
              {(isAuthenticated() && userInfo.username === getUserThatIsAuthenticated()) && (
                <button
                  className="change-info-button"
                  onClick={() => setProjectFormModal(!projectFormModal)}
                >
                  Adicionar
                </button>
              )}
            </div>
            {
              userInfo.projects && userInfo.projects.length !== 0
                ? userInfo.projects.map(section => (<Project data={section} />))
                : (<span className="user-section-null">Não há nenhuma informação aqui</span>)
            }
          </div>
          <hr />
        </div>
      </div>
      <Footer />
      {userFormModal && (<UserForm stateSetter={setUserFormModal} />)}
      {educationFormModal && (<EducationForm stateSetter={setEducationFormModal} />)}
      {professionalFormModal && (<ProfessionalForm stateSetter={setProfessionalFormModal} />)}
      {productionFormModal && (<ProductionForm stateSetter={setProductionFormModal} />)}
      {projectFormModal && (<ProjectForm stateSetter={setProjectFormModal} />)}
    </>
  );
}

export default User;