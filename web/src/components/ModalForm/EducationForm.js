import React, { useState } from 'react';

import api from '../../services/api';
import Modal from '../Modal/Modal';

function EducationForm({ stateSetter, user }) {
  const [name, setName] = useState('');
  const [institution, setInstitution] = useState('');
  const [description, setDescription] = useState('');
  const [grade, setGrade] = useState('Técnico');
  const [workload, setWorkload] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [submitValidationMsg, setSubmitValidationMsg] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    const DATA = {
      "name": name,
      "institution": institution,
      "workload": workload,
      "grade": grade,
      "start_date": startDate,
      "end_date": endDate,
      "user_id": Number(user)
    }
    
    await api.post(`/user/${user}/info/education/0`, DATA)
      .then((response) => {
        alert('Dados salvos com sucesso')
        stateSetter();
      })
      .catch((err) => {
        if (err.response.data) {
          const { error } = err.response.data;
          setSubmitValidationMsg(error);
        }
        else {
          setSubmitValidationMsg('Um erro ocorreu ao salvar as informações');
        }
      })
  }

  return (
    <Modal>
      <span className="modal-form-title">Adicionar novo curso</span>
      <form className="modal-form">
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="name">Nome</label>
          <input
            className="modal-form-input"
            name="name"
            autoComplete="off"
            type="text"
            placeholder="Técnico em Informática para Internet"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="institution">Instituição</label>
          <input
            className="modal-form-input"
            name="institution"
            autoComplete="off"
            type="text"
            placeholder="Instituto Federal Catarinense"
            value={institution}
            onChange={(event) => setInstitution(event.target.value)}
            required
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="description">Descrição</label>
          <textarea
            className="modal-form-input modal-form-input-textarea"
            name="description"
            autoComplete="off"
            placeholder="Descreva o que você aprendeu nesse curso..."
            maxLength="500"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="grade">Grau</label>
          <select 
            name="grade" 
            className="modal-form-input"
            value={grade}
            onChange={(event) => setGrade(event.target.value)}
          >
            <option value="Técnico">Técnico</option>
            <option value="Graduação">Graduação</option>
            <option value="Especialização">Especialização</option>
            <option value="Mestrado">Mestrado</option>
            <option value="Doutorado">Doutorado</option>
            <option value="Complementar">Complementar</option>
          </select>
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="workload">Carga horária total</label>
          <input
            className="modal-form-input"
            name="workload"
            autoComplete="off"
            type="number"
            placeholder="40"
            value={workload}
            onChange={(event) => setWorkload(event.target.value)}
            required
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="start_date">Data de início</label>
          <input
            className="modal-form-input"
            name="start_date"
            autoComplete="off"
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            required
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="end_date">Data de fim</label>
          <input
            className="modal-form-input"
            name="end_date"
            autoComplete="off"
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            required
          />
        </div>
        {submitValidationMsg && <span className="modal-form-error-message">{submitValidationMsg}</span>}
        <div className="modal-form-buttons">
          <input type="submit" onClick={handleSubmit} />
          <button onClick={(event) => {
            /* IMPLEMENTAR: limpar dados do formulário antes de fechar */
            event.preventDefault();
            stateSetter();
          }}>
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default EducationForm;