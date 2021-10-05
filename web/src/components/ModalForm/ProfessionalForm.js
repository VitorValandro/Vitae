import React, { useState } from 'react';

import api from '../../services/api';
import { getToken } from '../../services/auth';
import Modal from '../Modal/Modal';

function ProfessionalForm({ stateSetter, user }) {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [workload, setWorkload] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [submitValidationMsg, setSubmitValidationMsg] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    const DATA = {
      "role":role,
      "company":company,
      "workload":workload,
      "description":description,
      "start_date":startDate,
      "end_date":endDate,
      "user_id": Number(user)
    }

    await api.post(`/user/${user}/info/professional/0`, DATA, { headers: { 'Authorization': `Bearer ${getToken()}` } })
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
      <span className="modal-form-title">Adicionar nova experiência profissional</span>
      <form className="modal-form">
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="company">Empresa</label>
          <input
            className="modal-form-input"
            name="company"
            autoComplete="off"
            type="text"
            placeholder="Vitae Software LTDA"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            required
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="role">Posição</label>
          <input
            className="modal-form-input"
            name="role"
            autoComplete="off"
            type="text"
            placeholder="Desenvolvedor de Software"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            required
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="description">Descrição</label>
          <textarea
            className="modal-form-input modal-form-input-textarea"
            name="description"
            autoComplete="off"
            placeholder="Descreva suas atividades enquanto estava neste emprego..."
            maxLength="500"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="workload">Carga horária semanal</label>
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

export default ProfessionalForm;