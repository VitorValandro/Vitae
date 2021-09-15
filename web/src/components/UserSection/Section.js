import React from 'react';

import './Section.css'

function Education() {
  return (
    <div className="user-subsection">
      <span className="user-subsection-title">Técnico em Informática Para Internet</span>
      <span className="user-subsection-subtitle">Instituto Federal Catarinense</span>
      <ul className="user-subsection-info">
        <li><b>Grau: </b>Técnico</li>
        <li><b>Carga horária: </b>3600 horas</li>
      </ul>
      <b>2021-11-21/2022-01-01</b>
    </div>
  );
}

function Professional() {
  return(
    <div className="user-subsection">
      <span className="user-subsection-title">Instituto Federal Catarinense</span>
      <span className="user-subsection-subtitle">Professor</span>
      <span className="user-subsection-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </span>
      <ul className="user-subsection-info">
        <li><b>Carga horária semanal: </b>40 horas</li>
      </ul>
      <b>2021-11-21/2022-01-01</b>
    </div>
  );
}

function Production(){
  return(
    <div className="user-subsection">
      <span className="user-subsection-title">Adaptive Missing Data Imputation with Incremental Neuro-Fuzzy Gaussian Mixture Network (INFGMN)</span>
      <span className="user-subsection-subtitle">Produção bibliográfica</span>
      <span className="user-subsection-description">
        Ministra aulas de Desenvolvimento Web para alunos do curso Técnico em Informática para Internet
      </span>
      <ul className="user-subsection-info">
        <li><b>Tipo: </b>Artigo</li>
      </ul>
      <b>2020</b>
    </div>
  );
}

function Project(){
  return(
    <div className="user-subsection">
      <span className="user-subsection-title">Museus Virtuais</span>
      <span className="user-subsection-subtitle">Projeto de Ensino</span>
      <span className="user-subsection-description">
        Faz um monte de coisa aí que não vale nada
      </span>
      <ul className="user-subsection-info">
        <li><b>Situação: </b>Concluído</li>
        <li><b><a href="www.google.com">Mais informações</a></b></li>
      </ul>
      <b>2021-11-21/2022-01-01</b>
    </div>
  );
}

export { Education, Professional, Production, Project };