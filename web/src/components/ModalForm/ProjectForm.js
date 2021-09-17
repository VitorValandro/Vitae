import React, { useState } from 'react';

import api from '../../services/api';
import Modal from '../Modal/Modal';

function ProjectForm({ stateSetter, user }) {
  const [name, setName] = useState('');
  const [nature, setNature] = useState('Ensino');
  const [situation, setSituation] = useState('Em andamento');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [submitValidationMsg, setSubmitValidationMsg] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    const DATA = {
      "name":name,
      "nature":nature,
      "situation":situation,
      "link":link,
      "description": description,
      "start_date": startDate,
      "end_date": endDate,
      "user_id": Number(user)
    }

    await api.post(`/user/${user}/info/projects/0`, DATA)
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
      <span className="modal-form-title">Adicionar novo projeto</span>
      <form className="modal-form">
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="name">Título</label>
          <input
            className="modal-form-input"
            name="name"
            autoComplete="off"
            type="text"
            placeholder="Vitae: Portfólio Pessoal"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="nature">Categoria</label>
          <select 
            name="nature" 
            className="modal-form-input"
            value={nature}
            onChange={(event) => setNature(event.target.value)}
          >
            <option value="Ensino">Ensino</option>
            <option value="Pesquisa">Pesquisa</option>
            <option value="Extensão">Extensão</option>
          </select>
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="situation">Situação</label>
          <select 
            name="situation" 
            className="modal-form-input"
            value={situation}
            onChange={(event) => setSituation(event.target.value)}
          >
            <option value="Em andamento">Em andamento</option>
            <option value="Concluído">Concluído</option>
          </select>
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="link">Link</label>
          <input
            className="modal-form-input"
            name="link"
            autoComplete="off"
            type="text"
            placeholder="Repositório para mais informações..."
            value={link}
            onChange={(event) => setLink(event.target.value)}
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="description">Descrição</label>
          <textarea
            className="modal-form-input modal-form-input-textarea"
            name="description"
            autoComplete="off"
            placeholder="Descreva sua produção..."
            maxLength="500"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
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
          <button onClick={handleSubmit}>Salvar</button>
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

export default ProjectForm;