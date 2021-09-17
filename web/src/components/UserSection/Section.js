import React from 'react';

import './Section.css'

function Education({ data }) {
  return (
    <div className="user-subsection">
      <span className="user-subsection-title">{ data.name }</span>
      <span className="user-subsection-subtitle">{ data.institution }</span>
      <ul className="user-subsection-info">
        <li><b>Grau: </b>{ data.grade }</li>
        <li><b>Carga horária: </b>{ data.workload } horas</li>
      </ul>
      <b>{data.start_date} / {data.end_date}</b>
    </div>
  );
}

function Professional({ data }) {
  return(
    <div className="user-subsection">
      <span className="user-subsection-title">{ data.company }</span>
      <span className="user-subsection-subtitle">{ data.role }</span>
      <span className="user-subsection-description">
        { data.description }
      </span>
      <ul className="user-subsection-info">
        <li><b>Carga horária semanal: </b>{ data.workload }</li>
      </ul>
      <b>{ data.start_date } / { data.end_date }</b>
    </div>
  );
}

function Production({ data }){
  return(
    <div className="user-subsection">
      <span className="user-subsection-title">{ data.name }</span>
      <span className="user-subsection-subtitle">{ data.nature }</span>
      <span className="user-subsection-description">
        { data.description }
      </span>
      <ul className="user-subsection-info">
        <li><b>Tipo: </b>{ data.type }</li>
      </ul>
      <b>{ data.date_year }</b>
    </div>
  );
}

function Project({ data }){
  return(
    <div className="user-subsection">
      <span className="user-subsection-title">{ data.name }</span>
      <span className="user-subsection-subtitle">Projeto de { data.nature }</span>
      <span className="user-subsection-description">
        { data.description }
      </span>
      <ul className="user-subsection-info">
        <li><b>Situação: </b>{ data.situation }</li>
        {data.link && (<li><b><a href="www.google.com">{ data.link }</a></b></li>)}
      </ul>
      <b>{data.start_date} / {data.end_date}</b>
    </div>
  );
}

export { Education, Professional, Production, Project };